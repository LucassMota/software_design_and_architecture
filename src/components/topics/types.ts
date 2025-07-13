export enum TopicsEnum {
  IMPERATIVE_PROGRAMMING = "Imperative Programming",
  DECLARATIVE_PROGRAMMING = "Declarative Programming",
}

export const SUBTOPICS: Record<TopicsEnum, string[]> = {
  [TopicsEnum.IMPERATIVE_PROGRAMMING]: ["State", "Statements", "Control Flow"],
  [TopicsEnum.DECLARATIVE_PROGRAMMING]: [
    "Expressions Over Statements",
    "Immutability",
    "Function Composition",
    "Higher-Order Functions",
    "Descriptive Over Procedural",
    "Reactive Programming (React)",
  ],
};
