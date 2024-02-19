export interface ICheckboxItem {
  text: string;
  value: string;
  checked: boolean;
}

export interface IQuestionCheckboxProps {
  id: string;
  title: string;
  isVertical: boolean;
  list: ICheckboxItem[];
  onChange: (checked: boolean, id: string, index: number) => void;
}
