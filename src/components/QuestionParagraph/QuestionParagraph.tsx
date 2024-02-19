import { Typography } from "antd";
import { IQuestionParagraphProps } from "./type";
const { Paragraph } = Typography;

const ParagraphComponent = (props: IQuestionParagraphProps) => {
  const { text, direction } = props;

  const textList = text.split("\n"); // 例如 ['hello', '123', '456']
  return (
    <Paragraph style={{ textAlign: direction, marginBottom: 0 }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Paragraph>
  );
};

export default ParagraphComponent;
