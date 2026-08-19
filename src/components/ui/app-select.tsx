"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AppSelectOption = {
  /** Stable value submitted with the form */
  value: string;
  /** Text shown in the trigger and inside the menu */
  label: string;
  /** Optional secondary text shown under the label inside the menu */
  description?: string;
  /** Optional left-side icon (lucide-react component) */
  icon?: LucideIcon;
  /** Disable the option */
  disabled?: boolean;
};

export type AppSelectOptionGroup = {
  label: string;
  options: AppSelectOption[];
};

export type AppSelectSize = "sm" | "md" | "lg";
export type AppSelectVariant = "default" | "glass";

export type AppSelectProps = {
  /** Visible label rendered above the trigger */
  label?: React.ReactNode;
  /** Optional helper text shown under the trigger */
  helperText?: React.ReactNode;
  /** Error message — switches the trigger to the error state */
  error?: React.ReactNode;
  /** Marks the field as required (visual asterisk + aria) */
  required?: boolean;

  /** Placeholder shown when nothing is selected */
  placeholder?: string;

  /** Controlled value */
  value?: string;
  /** Uncontrolled initial value */
  defaultValue?: string;
  /** Change handler */
  onValueChange?: (value: string) => void;
  /** Form name (radix forwards to a hidden input) */
  name?: string;

  /** Flat list of options */
  options?: AppSelectOption[];
  /** Grouped options (takes precedence over `options` if both are passed) */
  groups?: AppSelectOptionGroup[];

  /** Trigger size (defaults to "md" → h-11) */
  size?: AppSelectSize;
  /** Visual variant — `glass` for use on glass-panel surfaces */
  variant?: AppSelectVariant;
  /** Disable the entire control */
  disabled?: boolean;

  /** id applied to the trigger (also used for the label `htmlFor`) */
  id?: string;

  /** Wrapper className */
  className?: string;
  /** Trigger className */
  triggerClassName?: string;

  /** Accessible label override (defaults to `label` text content) */
  "aria-label"?: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function flattenOptions(
  options: AppSelectOption[] | undefined,
  groups: AppSelectOptionGroup[] | undefined,
): AppSelectOptionGroup[] {
  if (groups && groups.length > 0) return groups;
  return [{ label: "", options: options ?? [] }];
}

function triggerVariantClasses(variant: AppSelectVariant | undefined) {
  switch (variant) {
    case "glass":
      return cn(
        "bg-background/70 backdrop-blur border-border/60",
        "hover:border-primary/50 hover:bg-background/90",
        "focus-visible:border-primary focus-visible:bg-background/95",
        "data-[state=open]:bg-background/95 data-[state=open]:border-primary",
      );
    default:
      return "";
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * AppSelect — the branded Select used across the MIA Academy site.
 *
 * Wraps the shadcn/Radix Select primitives with a label, helper text, error
 * state, an animated chevron and rich options (icon + description).
 *
 * Use the `options` prop for a flat list, or `groups` for grouped sections.
 */
export const AppSelect = React.forwardRef<HTMLButtonElement, AppSelectProps>(
  (
    {
      label,
      helperText,
      error,
      required,
      placeholder = "Select an option",
      value,
      defaultValue,
      onValueChange,
      name,
      options,
      groups,
      size = "md",
      variant = "default",
      disabled,
      id,
      className,
      triggerClassName,
      "aria-label": ariaLabel,
    },
    ref,
  ) => {
    const reactId = React.useId();
    const triggerId = id ?? `app-select-${reactId}`;
    const helperId = `${triggerId}-helper`;
    const errorId = `${triggerId}-error`;

    const isInvalid = Boolean(error);
    const describedBy =
      [helperText && !isInvalid ? helperId : null, isInvalid ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;

    const data = flattenOptions(options, groups);

    return (
      <div className={cn("w-full", className)}>
        {label != null && (
          <label
            htmlFor={triggerId}
            className="mb-2 flex items-center gap-1 text-sm font-medium text-foreground"
          >
            <span>{label}</span>
            {required && (
              <span aria-hidden className="text-destructive">
                *
              </span>
            )}
          </label>
        )}

        <Select
          {...(value !== undefined ? { value } : {})}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          {...(onValueChange ? { onValueChange } : {})}
          {...(disabled !== undefined ? { disabled } : {})}
          {...(required !== undefined ? { required } : {})}
          {...(name !== undefined ? { name } : {})}
        >
          <SelectTrigger
            ref={ref}
            id={triggerId}
            triggerSize={size}
            aria-label={ariaLabel ?? (typeof label === "string" ? label : undefined)}
            aria-describedby={describedBy}
            aria-invalid={isInvalid || undefined}
            className={cn(
              triggerVariantClasses(variant),
              isInvalid &&
                "border-destructive focus-visible:ring-destructive/30 data-[state=open]:ring-destructive/30",
              triggerClassName,
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent>
            {data.map((group, gi) => (
              <SelectGroup key={`${group.label || "group"}-${gi}`}>
                {group.label && <SelectLabel>{group.label}</SelectLabel>}
                {group.options.map((opt) => {
                  const Icon = opt.icon;
                  const itemProps: {
                    value: string;
                    textValue: string;
                    disabled?: boolean;
                  } = {
                    value: opt.value,
                    textValue: opt.label,
                  };
                  if (opt.disabled !== undefined) {
                    itemProps.disabled = opt.disabled;
                  }
                  return (
                    <SelectItem key={opt.value} {...itemProps}>
                      {Icon ? <Icon aria-hidden /> : null}
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="truncate font-medium">{opt.label}</div>
                        {opt.description && (
                          <div className="truncate text-xs font-normal text-muted-foreground">
                            {opt.description}
                          </div>
                        )}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>

        {/* Helper / error text — only one shows at a time */}
        {isInvalid ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs font-medium text-destructive"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-2 text-xs text-muted-foreground">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);
AppSelect.displayName = "AppSelect";

// ---------------------------------------------------------------------------
// Standalone success indicator (optional companion)
// ---------------------------------------------------------------------------

/**
 * Inline success chip rendered next to a valid field after the user picks a
 * value. Purely visual — accessibility comes from the underlying form
 * control. Drop it into your form layout when you want the extra feedback.
 */
export function AppSelectSuccess({ message = "Looks good" }: { message?: React.ReactNode }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent-foreground">
      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{message}</span>
    </p>
  );
}
