"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        "The contact form isn't connected yet. Please email us directly while we get this sorted."
      );
      return;
    }

    data.append("access_key", accessKey);
    data.append("subject", "New enquiry — Boot Scootin' Andover");
    data.append("from_name", "Boot Scootin' Andover Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't send the message. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-cream border border-brand-gold/50 rounded-2xl p-8 text-center shadow-sm">
        <div className="text-4xl mb-3" aria-hidden>🤠</div>
        <h2 className="text-2xl font-bold text-brand-dark">
          Message sent — thank you!
        </h2>
        <p className="mt-3 text-brand-medium">
          We&apos;ll be in touch soon. Keep your boots polished.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-brand-cream rounded-2xl p-6 md:p-8 shadow-sm border border-brand-light/40 space-y-5"
    >
      <div>
        <label htmlFor="name" className="block font-semibold text-brand-dark mb-1">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-brand-light bg-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-brand-dark mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-brand-light bg-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-semibold text-brand-dark mb-1">
          Phone <span className="text-brand-medium font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-brand-light bg-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold text-brand-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-brand-light bg-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold"
          placeholder="Tell us a little about yourself and what you'd like to know."
        />
      </div>

      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-gold text-brand-dark font-semibold py-3 rounded-lg hover:bg-yellow-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-brand-red text-sm text-center" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
