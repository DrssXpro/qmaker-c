import { Rate, Typography } from "antd";
import { IQuestionRateProps } from "./type";

const { Paragraph } = Typography;

const RateComponent = (props: IQuestionRateProps) => {
  const { title, count, value, allowHalf, id, onChange } = props;
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Rate count={count} value={value} allowHalf={allowHalf} onChange={(value) => onChange(value, id)} />
    </div>
  );
};

export default RateComponent;
