import type { SchoolClass } from "@/types/learning";

export const catalog: SchoolClass[] = [
  {
    id: "class-8",
    name: "Class 8",
    subjects: [
      {
        id: "class-8-science",
        name: "Science",
        chapters: [
          {
            id: "c8-sci-ch1",
            title: "Crop Production and Management",
            summary: "Core agriculture concepts with local examples.",
            sequence: 1,
            learningPacks: [
              {
                id: "lp-101",
                title: "Farmer Interview Lecture",
                format: "video",
                estimatedMinutes: 22,
                downloadSizeMb: 68,
                isOfflineReady: false,
              },
              {
                id: "lp-102",
                title: "Soil Types Notes",
                format: "notes",
                estimatedMinutes: 15,
                downloadSizeMb: 2,
                isOfflineReady: true,
              },
            ],
          },
        ],
      },
      {
        id: "class-8-math",
        name: "Mathematics",
        chapters: [
          {
            id: "c8-math-ch1",
            title: "Rational Numbers",
            summary: "Concept drills, worked examples, and revision packs.",
            sequence: 1,
            learningPacks: [
              {
                id: "lp-201",
                title: "Practice Worksheet Set A",
                format: "worksheet",
                estimatedMinutes: 30,
                downloadSizeMb: 1,
                isOfflineReady: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
