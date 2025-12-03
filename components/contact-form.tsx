export function ContactForm() {
  return (
    <form
      action="mailto:yagmur.gcm@gmail.com"
      method="POST"
      encType="text/plain"
      className="wave-panel flex flex-col gap-6 p-8"
    >
      <label className="flex flex-col gap-2 text-[var(--text-secondary)]">
        Name
        <input
          type="text"
          name="name"
          required
          className="rounded-2xl border border-[rgba(109,73,209,0.2)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[rgba(31,27,46,0.4)] focus:border-[var(--color-2)] focus:outline-none"
          placeholder="Ada Lovelace"
        />
      </label>
      <label className="flex flex-col gap-2 text-[var(--text-secondary)]">
        Email
        <input
          type="email"
          name="email"
          required
          className="rounded-2xl border border-[rgba(109,73,209,0.2)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[rgba(31,27,46,0.4)] focus:border-[var(--color-3)] focus:outline-none"
          placeholder="you@email.com"
        />
      </label>
      <label className="flex flex-col gap-2 text-[var(--text-secondary)]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-2xl border border-[rgba(109,73,209,0.2)] bg-white px-4 py-3 text-[var(--text-primary)] placeholder:text-[rgba(31,27,46,0.4)] focus:border-[var(--color-1)] focus:outline-none"
          placeholder="Tell me about your next idea."
        />
      </label>
      <button
        type="submit"
        className="gradient-btn inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white"
      >
        Send
      </button>
      <p className="text-sm text-[var(--text-secondary)]">This opens your email client with the details pre-filled.</p>
    </form>
  );
}
