export interface IQuestionInputProps {
  id: string;
  title: string;
  placeholder: string;
  onChange: (value: string, id: string) => void;
}
