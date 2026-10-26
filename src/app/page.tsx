import Link from "next/link";

const highlights = [
  {
    title: "Offline-first by design",
    description:
      "Service worker registration and IndexedDB download queue are included to support resilient classroom use with limited connectivity.",
  },
  {
    title: "Teacher-contributed lessons",
    description:
      "Educators can submit lectures, notes, and resources through structured workflows that keep student content organized by class, subject, and chapter.",
  },
  {
    title: "Future-ready architecture",
    description:
      "Next.js API routes and Prisma models provide a clean starting point for evolving toward independent backend services.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white shadow-lg sm:px-10">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-200">PUSTAKSETU Foundation</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Connecting students to trusted learning, even offline.</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-100 sm:text-lg">
          This initial release focuses on project structure, educator workflows, and student browsing screens. Offline
          sync and production AI generation are intentionally marked as in-progress until full backend integration is
          completed.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Open Student Dashboard
          </Link>
          <Link
            href="/teacher/submit"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Teacher Submission Interface
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
