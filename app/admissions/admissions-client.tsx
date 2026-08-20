"use client";

import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  Upload,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { faculties } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty } from "@/lib/content-i18n";

const stepIcons = [GraduationCap, FileText, Users, ClipboardList];

export function AdmissionsClient() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", note: "" });
  const [documents, setDocuments] = useState<{
    idDocument: File | null;
    certificate: File | null;
    photo: File | null;
    cv: File | null;
  }>({ idDocument: null, certificate: null, photo: null, cv: null });

  const canAdvance =
    step === 0
      ? Boolean(form.name.trim() && form.email.trim())
      : step === 1
        ? Boolean(form.program)
        : true;

  const canSubmit = Boolean(documents.idDocument && documents.certificate && documents.photo);

  return (
    <>
      <PageHero
        eyebrow={t.admissionsPage.eyebrow}
        title={t.admissionsPage.title}
        description={t.admissionsPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.admissions }]}
      />

      <Section>
        <SectionHeading
          eyebrow={t.admissionsPage.processEyebrow}
          title={t.admissionsPage.processTitle}
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.admissionsPage.steps.map((item, i) => {
            const Icon = stepIcons[i]!;
            return (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={t.admissionsPage.requirementsEyebrow}
          title={t.admissionsPage.requirementsTitle}
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Tabs defaultValue="undergraduate">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              {t.admissionsPage.requirementGroups.map((group) => (
                <TabsTrigger
                  key={group.key}
                  value={group.key}
                  className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {t.admissionsPage.requirementGroups.map((group) => (
              <TabsContent key={group.key} value={group.key}>
                <ul className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-7 shadow-soft">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {t.admissionsPage.tuitionCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <article className="hover-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass-panel grid gap-8 rounded-3xl p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-foreground">
                {t.admissionsPage.checklistTitle}
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.admissionsPage.checklist.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              variant="hero"
              size="xl"
              onClick={() =>
                toast.success(t.admissionsPage.toastChecklistTitle, {
                  description: t.admissionsPage.toastChecklistDescription,
                })
              }
            >
              <Download /> {t.admissionsPage.downloadChecklist}
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Apply online — disabled for now
      <Section muted id="apply">
        <SectionHeading
          eyebrow={t.admissionsPage.applyEyebrow}
          title={t.admissionsPage.applyTitle}
        />
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <form
            className="rounded-3xl border border-border bg-card p-8 shadow-lift"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(t.admissionsPage.toastApplicationTitle, {
                description: t.admissionsPage.toastApplicationDescription,
              });
              setForm({ name: "", email: "", phone: "", program: "", note: "" });
              setDocuments({ idDocument: null, certificate: null, photo: null, cv: null });
              setStep(0);
            }}
          >
            <div
              className="flex items-center gap-2"
              aria-label={t.admissionsPage.stepIndicator(step + 1)}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {t.admissionsPage.stepIndicator(step + 1)}
            </p>

            {step === 0 && (
              <div className="mt-6 space-y-4">
                <Field
                  id="applicant-name"
                  label={t.admissionsPage.fullName}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  id="applicant-email"
                  label={t.admissionsPage.emailAddress}
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Field
                  id="applicant-phone"
                  label={t.admissionsPage.phoneNumber}
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>
            )}

            {step === 1 && (
              <div className="mt-6 space-y-4">
                <AppSelect
                  id="applicant-program"
                  label={t.admissionsPage.facultyLabel}
                  required
                  placeholder={t.admissionsPage.selectFaculty}
                  helperText={t.admissionsPage.facultyHelper}
                  value={form.program}
                  onValueChange={(v) => setForm({ ...form, program: v })}
                  options={faculties.map((f) => ({
                    value: f.slug,
                    label: localizeFaculty(f, language).name,
                    icon: BookOpen,
                  }))}
                />
                <div>
                  <label
                    htmlFor="applicant-note"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t.admissionsPage.noteLabel}
                  </label>
                  <textarea
                    id="applicant-note"
                    rows={5}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder={t.admissionsPage.notePlaceholder}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">{t.admissionsPage.documentsHelper}</p>
                <FileField
                  id="applicant-id-document"
                  label={t.admissionsPage.idDocumentLabel}
                  file={documents.idDocument}
                  onChange={(f) => setDocuments({ ...documents, idDocument: f })}
                  chooseLabel={t.admissionsPage.chooseFile}
                  emptyLabel={t.admissionsPage.noFileChosen}
                  required
                />
                <FileField
                  id="applicant-certificate"
                  label={t.admissionsPage.certificateLabel}
                  file={documents.certificate}
                  onChange={(f) => setDocuments({ ...documents, certificate: f })}
                  chooseLabel={t.admissionsPage.chooseFile}
                  emptyLabel={t.admissionsPage.noFileChosen}
                  required
                />
                <FileField
                  id="applicant-photo"
                  label={t.admissionsPage.photoLabel}
                  file={documents.photo}
                  onChange={(f) => setDocuments({ ...documents, photo: f })}
                  chooseLabel={t.admissionsPage.chooseFile}
                  emptyLabel={t.admissionsPage.noFileChosen}
                  required
                />
                <FileField
                  id="applicant-cv"
                  label={t.admissionsPage.cvLabel}
                  file={documents.cv}
                  onChange={(f) => setDocuments({ ...documents, cv: f })}
                  chooseLabel={t.admissionsPage.chooseFile}
                  emptyLabel={t.admissionsPage.noFileChosen}
                  optionalLabel={t.admissionsPage.optionalLabel}
                />
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {step > 0 && (
                <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
                  {t.admissionsPage.back}
                </Button>
              )}
              {step < 2 ? (
                <Button
                  type="button"
                  variant="hero"
                  disabled={!canAdvance}
                  onClick={() => setStep((s) => s + 1)}
                >
                  {t.admissionsPage.continueLabel}
                </Button>
              ) : (
                <Button type="submit" variant="hero" disabled={!canSubmit}>
                  {t.admissionsPage.submitApplication}
                </Button>
              )}
            </div>
          </form>
        </Reveal>
      </Section>
      */}
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

function FileField({
  id,
  label,
  file,
  onChange,
  chooseLabel,
  emptyLabel,
  optionalLabel,
  required,
}: {
  id: string;
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
  chooseLabel: string;
  emptyLabel: string;
  optionalLabel?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {!required && optionalLabel && (
          <span className="ms-1.5 text-xs font-normal text-muted-foreground">
            ({optionalLabel})
          </span>
        )}
      </label>
      <div className="mt-2 flex items-center gap-3">
        <label
          htmlFor={id}
          className="hover-lift flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-input bg-background px-4 text-sm font-medium text-foreground outline-none transition hover:bg-muted focus-within:ring-2 focus-within:ring-ring"
        >
          <Upload className="h-4 w-4" />
          {chooseLabel}
        </label>
        <input
          id={id}
          type="file"
          required={required && !file}
          accept="image/*,.pdf"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
          className="sr-only"
        />
        <span className="min-w-0 truncate text-sm text-muted-foreground">
          {file ? file.name : emptyLabel}
        </span>
      </div>
    </div>
  );
}
