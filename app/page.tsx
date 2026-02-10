"use client";

import { SubmitEvent, useEffect, useMemo, useState } from "react";
import { getInitialLocale, saveLocale, texts, type Locale } from "../lib/i18n";

export default function Home() {
  // Initialize with a stable server value to avoid hydration mismatch
  const [locale, setLocale] = useState<Locale>("de");
  const [year, setYear] = useState<number | null>(null);
  const t = useMemo(() => texts[locale], [locale]);

  // On mount, determine preferred locale and update document/lang and storage
  useEffect(() => {
    const preferred = getInitialLocale();
    setLocale(preferred);
    document.documentElement.lang = preferred;
    saveLocale(preferred);
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="peopleWORKS Logo"
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#beratung" className="hover:text-zinc-600">
              {t.nav.services}
            </a>
            <a href="#ueber-mich" className="hover:text-zinc-600">
              {t.nav.about}
            </a>
            <a href="#kontakt" className="hover:text-zinc-600">
              {t.nav.contact}
            </a>
          </nav>
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-center">
        <div className="absolute inset-0 bg-[url('https://images.squarespace-cdn.com/content/v1/697bca49f89ab47bd015c142/e0e59677-6438-451e-8181-9518f719ce2c/20190508183554-_DSC9139+2.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-3xl font-semibold sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-6 text-lg sm:text-xl">{t.hero.name}</p>
          <p className="mt-1 text-sm sm:text-base">{t.hero.tagline}</p>
        </div>
      </section>

      {/* Beratungsschwerpunkte */}
      <section id="beratung" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-2xl font-semibold sm:text-3xl">
          {t.services.title}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, idx) => (
            <ServiceCard
              key={idx}
              imageUrl={
                idx === 0
                  ? "https://images.squarespace-cdn.com/content/v1/697bca49f89ab47bd015c142/06d6bb10-4173-46db-85fa-55a91b72edee/anpassung.png"
                  : idx === 1
                    ? "https://images.squarespace-cdn.com/content/v1/697bca49f89ab47bd015c142/c0b8ba12-a972-4602-a3d3-91d30584e16c/kompetenzen.png"
                    : "https://images.squarespace-cdn.com/content/v1/697bca49f89ab47bd015c142/e1fc1f6a-e6ce-405b-bd1f-2cb3e01db64b/fahigkeiten.png"
              }
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">{t.about.title}</h2>
            <p className="text-zinc-700">{t.about.copy}</p>
            <Accordion className="mt-8" items={t.about.accordion} />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/697bca49f89ab47bd015c142/6fc2fa9d-1aa1-4dfd-bb5c-2d31beabec2a/Christoph+after+signing_2022.jpeg?format=1000w"
              alt="Christoph Küffer"
              className="h-auto max-h-[420px] w-full max-w-md rounded-lg object-cover shadow"
            />
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">{t.contact.title}</h2>
            <p className="text-zinc-700">{t.contact.intro}</p>
            <ContactForm
              toEmail={t.contact.email}
              labels={t.contact.labels}
              buttonLabel={t.contact.button}
            />
          </div>
          <div className="rounded-lg border border-zinc-200 p-6">
            <h4 className="text-lg font-medium">{t.contact.addressTitle}</h4>
            <p className="mt-2 whitespace-pre-line text-zinc-700">
              {t.contact.address}
            </p>
            <h4 className="mt-6 text-lg font-medium">
              {t.contact.contactTitle}
            </h4>
            <p className="mt-2 text-zinc-700">{t.contact.email}</p>
            <p className="text-zinc-700">{t.contact.phone}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-600">
        © {year ?? ""} peopleWORKS GmbH
      </footer>
    </div>
  );
}

function ServiceCard({
  imageUrl,
  title,
  content,
}: {
  imageUrl: string;
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-zinc-50">
        <img src={imageUrl} alt="Icon" className="h-12 w-12 object-contain" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{content}</p>
    </div>
  );
}

type AccordionItem = {
  title: string;
  content: string;
};

function Accordion({
  items,
  className,
}: {
  items: ReadonlyArray<AccordionItem>;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={className}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-zinc-200 py-3">
            <button
              className="flex w-full items-center justify-between py-2 text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.title}</span>
              <span className="inline-block rounded-full border border-zinc-300 px-2 text-xs">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="mt-2 text-sm text-zinc-700">{item.content}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ContactForm({
  toEmail,
  labels,
  buttonLabel,
}: {
  toEmail: string;
  labels: { name: string; email: string; subject: string; message: string };
  buttonLabel: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const s = encodeURIComponent(`${subject} – ${name}`);
    const bodyLines = [message, "", `Name: ${name}`, `Email: ${email}`].join(
      "\n",
    );
    const b = encodeURIComponent(bodyLines);
    window.location.href = `mailto:${toEmail}?subject=${s}&body=${b}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-zinc-700">{labels.name}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-0 focus:border-zinc-500"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-zinc-700">{labels.email}</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-0 focus:border-zinc-500"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block text-zinc-700">{labels.subject}</span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-0 focus:border-zinc-500"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-zinc-700">{labels.message}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none ring-0 focus:border-zinc-500"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (l: Locale) => void;
}) {
  return (
    <div className="ml-4 flex items-center gap-1 rounded-full border border-zinc-200 p-1 text-xs">
      {(["de", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`rounded-full px-3 py-1 ${
            locale === l
              ? "bg-zinc-900 text-white"
              : "text-zinc-700 hover:bg-zinc-100"
          }`}
          aria-pressed={locale === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
