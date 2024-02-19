export interface IQuestionTitleProps {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | undefined;
  direction: "left" | "center" | "right";
}
