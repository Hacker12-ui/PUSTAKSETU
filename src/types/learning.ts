export interface LearningPack {
  id: string;
  title: string;
  format: "video" | "notes" | "worksheet" | "assessment";
  estimatedMinutes: number;
  downloadSizeMb: number;
  isOfflineReady: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  sequence: number;
  learningPacks: LearningPack[];
}

export interface Subject {
  id: string;
  name: string;
  chapters: Chapter[];
}

export interface SchoolClass {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface TeacherSubmissionDraft {
  classId: string;
  subjectId: string;
  chapterId: string;
  title: string;
  resourceType: "lecture" | "notes" | "resource";
  language: string;
  summary: string;
  sourceUrl?: string;
}
