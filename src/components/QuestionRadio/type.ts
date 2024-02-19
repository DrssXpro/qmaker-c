export interface IRadioOption {
  text: string;
  value: string;
}

export interface IQuestionRadioProps {
  id: string;
  title: string;
  isVertical: boolean;
  options: IRadioOption[];
  current: string;
  onChange: (value: string, id: string) => void;
}
