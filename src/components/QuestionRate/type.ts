export interface IQuestionRateProps {
  id: string;
  title: string;
  value: number;
  count: number;
  allowHalf: boolean;
  onChange: (value: number, id: string) => void;
}
