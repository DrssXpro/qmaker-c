import { Typography, Radio, Space } from "antd";
import { IQuestionRadioProps } from "./type";

const { Paragraph } = Typography;

const RadioComponent = (props: IQuestionRadioProps) => {
  const { title, isVertical, options, current, id, onChange } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={current}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options.map((opt) => {
            const { value, text } = opt;
            return (
              <Radio key={value} value={value} onChange={(e) => onChange(e.target.value, id)}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default RadioComponent;
