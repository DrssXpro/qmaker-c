import { Typography, Input } from "antd";
import { IQuestionInputProps } from "./type";

const { Paragraph } = Typography;

const InputComponent = (props: IQuestionInputProps) => {
  const { title, placeholder, id, onChange } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder} onChange={(e) => onChange(e.target.value, id)}></Input>
    </div>
  );
};

export default InputComponent;
