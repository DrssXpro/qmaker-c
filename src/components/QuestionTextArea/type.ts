export interface IQuestionTextareaProps {
  id: string;
  title: string;
  placeholder: string;
  onChange: (value: string, id: string) => void;
}
