import type { TeacherSubmissionDraft } from "@/types/learning";

const emptyDraft: TeacherSubmissionDraft = {
  classId: "",
  subjectId: "",
  chapterId: "",
  title: "",
  resourceType: "lecture",
  language: "",
  summary: "",
  sourceUrl: "",
};

export default function TeacherSubmitPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
        <h1 className="text-2xl font-semibold text-violet-950">Teacher Content Submission</h1>
        <p className="mt-2 text-sm text-violet-900">
          This screen captures draft metadata for lectures, notes, and educational resources. Draft saving, moderation,
          and publishing workflows are intentionally marked as upcoming work.
        </p>
      </header>

      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" noValidate>
        <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-900" role="status">
          Submission is currently a UI placeholder. No data is stored yet.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-800">
            Class
            <input
              defaultValue={emptyDraft.classId}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="e.g. Class 8"
              name="classId"
            />
          </label>

          <label className="text-sm font-medium text-slate-800">
            Subject
            <input
              defaultValue={emptyDraft.subjectId}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="e.g. Science"
              name="subjectId"
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-800">
          Chapter
          <input
            defaultValue={emptyDraft.chapterId}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="e.g. Crop Production"
            name="chapterId"
          />
        </label>

        <label className="block text-sm font-medium text-slate-800">
          Content title
          <input
            defaultValue={emptyDraft.title}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="Enter a clear title"
            name="title"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-800">
            Resource type
            <select
              defaultValue={emptyDraft.resourceType}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              name="resourceType"
            >
              <option value="lecture">Lecture</option>
              <option value="notes">Notes</option>
              <option value="resource">Educational resource</option>
            </select>
          </label>

          <label className="text-sm font-medium text-slate-800">
            Language
            <input
              defaultValue={emptyDraft.language}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="e.g. Hindi"
              name="language"
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-800">
          Summary
          <textarea
            defaultValue={emptyDraft.summary}
            className="mt-1 min-h-28 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="Describe goals and prerequisites"
            name="summary"
          />
        </label>

        <label className="block text-sm font-medium text-slate-800">
          Optional source URL
          <input
            defaultValue={emptyDraft.sourceUrl}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="https://"
            name="sourceUrl"
            type="url"
          />
        </label>

        <button
          type="button"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Save draft (coming soon)
        </button>
      </form>
    </main>
  );
}
