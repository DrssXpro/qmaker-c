import { IQuestionCheckboxProps } from "./QuestionCheckbox/type";
import { IQuestionInfoProps } from "./QuestionInfo/type";
import { IQuestionInputProps } from "./QuestionInput/type";
import { IQuestionParagraphProps } from "./QuestionParagraph/type";
import { IQuestionRadioProps } from "./QuestionRadio/type";
import { IQuestionRateProps } from "./QuestionRate/type";
import { IQuestionTextareaProps } from "./QuestionTextArea/type";
import { IQuestionTitleProps } from "./QuestionTitle/type";

export type ComponentInfoType = {
  id: string;
  type: string;
  title: string;

  props: ComponentPropsType;
};

// 各个组件的 prop type
export type ComponentPropsType = IQuestionTitleProps &
  IQuestionInputProps &
  IQuestionInfoProps &
  IQuestionParagraphProps &
  IQuestionTextareaProps &
  IQuestionRadioProps &
  IQuestionCheckboxProps &
  IQuestionRateProps;
