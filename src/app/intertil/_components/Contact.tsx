"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
  Loader2,
  Check,
} from "lucide-react";
import Circled from "./Circled";
import { useLanguage } from "./i18n";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const directContact = [
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: "+386 1 234 5678",
      href: "tel:+38612345678",
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: "+386 1 234 5678",
      href: "https://wa.me/38612345678",
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: "prodaja@intertil.si",
      href: "mailto:prodaja@intertil.si",
    },
    {
      icon: MapPin,
      label: t.contact.officeLabel,
      value: t.contact.officeValue,
      href: undefined,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: t.contact.hoursValue,
      href: undefined,
    },
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: forward to the business's Google Form via its pre-fill link
    // (map each field below to its entry.<id> once that link is provided).
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="bg-sugar-white py-28 md:py-36">
      <div className="w-full px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-intertil-label text-xs md:text-sm tracking-[0.25em] text-asphalt-dim uppercase">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-intertil-display text-4xl font-semibold leading-[1.1] text-asphalt md:text-5xl">
            {t.contact.title.pre}
            <Circled>{t.contact.title.keyword}</Circled>
            {t.contact.title.post}
          </h2>
          <p className="mt-5 text-asphalt-dim">{t.contact.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-5 md:gap-8">
          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <ul className="divide-y divide-asphalt/10">
              {directContact.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 py-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-steel/10 text-steel">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-intertil-label text-xs uppercase tracking-widest text-asphalt-dim">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-asphalt">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block transition-colors hover:text-steel"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Branded enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 rounded-3xl border border-asphalt/10 bg-mist/60 p-6 sm:p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-steel/15 text-steel">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-intertil-display text-2xl font-semibold text-asphalt">
                  {t.contact.form.sentTitle}
                </h3>
                <p className="mt-2 max-w-sm text-asphalt-dim">
                  {t.contact.form.sentBody}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t.contact.form.nameLabel} name="name" required />
                  <Field
                    label={t.contact.form.companyLabel}
                    name="company"
                    required
                  />
                  <Field
                    label={t.contact.form.emailLabel}
                    name="email"
                    type="email"
                    required
                  />
                  <Field
                    label={t.contact.form.phoneLabel}
                    name="phone"
                    type="tel"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-intertil-label text-xs uppercase tracking-widest text-asphalt-dim"
                  >
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-asphalt/15 bg-sugar-white px-4 py-3 text-asphalt placeholder:text-asphalt-dim/60 focus:border-steel focus:outline-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-steel px-6 py-3.5 text-sm font-semibold text-sugar-white transition-colors hover:bg-steel-bright disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.contact.form.submitSending}
                    </>
                  ) : (
                    t.contact.form.submitIdle
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-intertil-label text-xs uppercase tracking-widest text-asphalt-dim"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-asphalt/15 bg-sugar-white px-4 py-3 text-asphalt placeholder:text-asphalt-dim/60 focus:border-steel focus:outline-none"
      />
    </div>
  );
}
