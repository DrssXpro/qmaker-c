import { Typography, Space, Checkbox } from "antd";
import { IQuestionCheckboxProps } from "./type";

const { Paragraph } = Typography;
const CheckboxComponent = (props: IQuestionCheckboxProps) => {
  const { title, list, isVertical, id, onChange } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? "vertical" : "horizontal"}>
        {list.map((opt, index) => {
          const { value, text, checked } = opt;
          return (
            <Checkbox
              key={value}
              value={value}
              checked={checked}
              onChange={(e) => onChange(e.target.checked, id, index)}
            >
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};

export default CheckboxComponent;
