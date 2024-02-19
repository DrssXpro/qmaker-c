import { Button, message } from "antd";
import { useState } from "react";
import { produce } from "immer";
import { getComponentByType } from "@/components";
import { ComponentInfoType } from "@/components/type";
import { getQuestionDetailApi, submitQuestionDetailApi } from "@/service/api/questionService";
import styles from "./question.module.css";
import { ICheckboxItem } from "@/components/QuestionCheckbox/type";
import { IRadioOption } from "@/components/QuestionRadio/type";
import { useRouter } from "next/router";

function GeneratorComponent(componentInfo: ComponentInfoType, cb: any) {
  const { type, props, id } = componentInfo;
  const c = getComponentByType(type);
  if (!c) return null;
  const { Component } = c;
  return <Component {...props} id={id} onChange={cb} />;
}

export default function Question(props: any) {
  const questionId = props.id;
  const [struct, setStruct] = useState<any[]>(props.data.struct);
  const router = useRouter();

  // 填写表单
  const handleChange = (value: number | string, id: string, index?: number) => {
    setStruct(
      produce(struct, (draft) => {
        const item = draft.find((i) => i.id === id);
        if (item.type === "questionRadio") {
          item.props.current = value;
        } else if (item.type === "questionCheckbox") {
          const options = item.props.list;
          options[index!].checked = value;
        } else {
          item.props.value = value;
        }
      })
    );
  };

  // 整合结果，提交后台
  const composeResult = () => {
    let ischeck: 0 | 1 = 0;
    let isradio: 0 | 1 = 0;
    return {
      result: struct.map((i) => {
        if (i.type === "questionRadio") {
          const current = i.props.options.find((item: IRadioOption) => item.value === i.props.current);
          isradio = 1;
          return {
            id: i.id,
            type: i.type,
            title: i.title,
            value: current ? current.text : undefined,
          };
        } else if (i.type === "questionCheckbox") {
          ischeck = 1;
          return {
            id: i.id,
            type: i.type,
            title: i.title,
            value: i.props.list.filter((item: ICheckboxItem) => item.checked).map((item: ICheckboxItem) => item.text),
          };
        } else {
          return { id: i.id, type: i.type, title: i.title, value: i.props.value };
        }
      }),
      ischeck,
      isradio,
    };
  };

  const handleSubmit = async () => {
    try {
      const result = composeResult();
      const res = await submitQuestionDetailApi(questionId, result);
      message.success("提交成功");
      router.push("/result");
    } catch (error) {
      message.error("提交失败");
    }
  };
  return (
    <>
      {struct.map((c: ComponentInfoType) => {
        return (
          <div key={c.id} className={styles["component-wrapper"]}>
            {GeneratorComponent(c, handleChange)}
          </div>
        );
      })}
      <div style={{ textAlign: "center" }}>
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;

  // 根据 id 获取问卷数据
  const data = await getQuestionDetailApi(id);

  return {
    props: { ...data, id },
  };
}
