import { Typography } from "antd";
import { IQuestionInfoProps } from "./type";

const { Title, Paragraph } = Typography;

const InfoComponent = (props: IQuestionInfoProps) => {
  const { title, desc } = props;

  const descTexList = desc.split("\n");

  return (
    <div style={{ textAlign: "center" }}>
      <Title level={3} style={{ marginTop: 0 }}>
        {title}
      </Title>
      <Paragraph style={{ marginBottom: 0 }}>
        {descTexList.map((t, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        ))}
      </Paragraph>
    </div>
  );
};

export default InfoComponent;
