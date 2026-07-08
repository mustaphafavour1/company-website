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

const directContact = [
  {
    icon: Phone,
    label: "Phone",
    value: "+34 900 000 000",
    href: "tel:+34900000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 900 000 000",
    href: "https://wa.me/34900000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tierradeacogida.es",
    href: "mailto:info@tierradeacogida.es",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Algeciras, Spain — EU port of entry",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9:00–18:00 CET",
    href: undefined,
  },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: forward to the business's Google Form via its pre-fill link
    // (map each field below to its entry.<id> once that link is provided).
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="bg-ember-black py-28 md:py-36">
      <div className="w-full px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-label text-xs md:text-sm tracking-[0.25em] text-guanabana-dim uppercase">
            Contact Us
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            <span className="text-brasa-bright">Bring Cuba&apos;s terroir</span>{" "}
            <span className="italic text-mango-bright">to your market.</span>
          </h2>
          <p className="mt-5 text-guanabana/80">
            Tell us what you need — a trial pallet or a standing seasonal
            order — and we&apos;ll get back to you with real availability
            and pricing.
          </p>
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
            <ul className="divide-y divide-guanabana/10">
              {directContact.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 py-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mango/15 text-mango-bright">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-label text-xs uppercase tracking-widest text-guanabana-dim">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-guanabana">
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
                        className="block transition-colors hover:text-mango-bright"
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
            className="md:col-span-3 rounded-3xl border border-guanabana/12 bg-gradient-to-br from-ember-black-soft to-ember-black p-6 sm:p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-palm/25 text-palm-bright">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-guanabana">
                  Request received.
                </h3>
                <p className="mt-2 max-w-sm text-guanabana/75">
                  We&apos;ll be in touch shortly with availability and
                  pricing for your enquiry.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Company name" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-label text-xs uppercase tracking-widest text-guanabana-dim"
                  >
                    What are you looking to import?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-guanabana/15 bg-ember-black px-4 py-3 text-guanabana placeholder:text-guanabana-dim/60 focus:border-mango focus:outline-none"
                    placeholder="Volumes, categories, or a trial order you'd like to place"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brasa px-6 py-3.5 text-sm font-semibold text-ember-black transition-colors hover:bg-brasa-bright disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request a Quote"
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
        className="mb-2 block font-label text-xs uppercase tracking-widest text-guanabana-dim"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-guanabana/15 bg-ember-black px-4 py-3 text-guanabana placeholder:text-guanabana-dim/60 focus:border-mango focus:outline-none"
      />
    </div>
  );
}
