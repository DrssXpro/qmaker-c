import { Typography, Input } from "antd";
import { IQuestionTextareaProps } from "./type";

const { Paragraph } = Typography;
const { TextArea } = Input;

const TextareaComponent = (props: IQuestionTextareaProps) => {
  const { title, placeholder, id, onChange } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder} onChange={(e) => onChange(e.target.value, id)}></TextArea>
      </div>
    </div>
  );
};

export default TextareaComponent;
