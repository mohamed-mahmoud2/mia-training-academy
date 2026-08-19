"use client";

import Link from "next/link";
import { MessageCircle, Phone, Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { faqs } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizeFaq } from "@/lib/content-i18n";

const categories = [
  "All",
  "Admissions",
  "Tuition & Fees",
  "Academics",
  "Campus Life",
  "Online Learning",
];

export function FaqsClient() {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .filter((faq) => category === "All" || faq.category === category)
      .map((faq) => localizeFaq(faq, language))
      .filter(
        (faq) =>
          !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q),
      );
  }, [query, category, language]);

  return (
    <>
      <PageHero
        eyebrow={t.faqsPage.eyebrow}
        title={t.faqsPage.title}
        description={t.faqsPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.faqs }]}
      >
        <div className="relative max-w-xl">
          <label htmlFor="faq-search" className="sr-only">
            {t.faqsPage.searchLabel}
          </label>
          <Search className="pointer-events-none absolute top-1/2 start-4 h-5 w-5 -translate-y-1/2 text-primary-foreground/60" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.faqsPage.searchPlaceholder}
            className="h-13 w-full rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 ps-12 pe-4 text-primary-foreground backdrop-blur outline-none placeholder:text-primary-foreground/55 focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
      </PageHero>

      <Section>
        <Reveal className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setCategory(item)}
            >
              {item === "All" ? t.faqsPage.allCategory : localizeCategory(item, language)}
            </Button>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          {results.length === 0 ? (
            <p className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground shadow-soft">
              {t.faqsPage.noResults}
            </p>
          ) : (
            <Accordion type="single" collapsible>
              {results.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-block text-sm font-semibold text-primary hover:text-accent-foreground"
                    >
                      {t.faqsPage.askAdvisor}
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </Reveal>
      </Section>

      <Section muted>
        <Reveal className="glass-panel grid gap-6 rounded-3xl p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {t.faqsPage.stillHaveQuestions}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.faqsPage.advisorsAvailable}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-accent-foreground" />
              <a href="tel:+20223580100" className="transition-colors hover:text-accent">
                +20 2 2358 0100
              </a>
            </p>
          </div>
          <Button asChild variant="hero" size="xl">
            <Link href="/contact">
              <MessageCircle /> {t.faqsPage.chatWithAdvisor}
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
