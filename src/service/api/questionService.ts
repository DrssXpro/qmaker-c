import { get, post } from "../";

// 获取问卷详情
function getQuestionDetailApi(id: string) {
  return get(`/question/c/detail/${id}`);
}

// 提交问卷
function submitQuestionDetailApi(
  id: string,
  payload: {
    result: any[];
    ischeck: 0 | 1;
    isradio: 0 | 1;
  }
) {
  return post(`/question/submit/${id}`, payload);
}

export { getQuestionDetailApi, submitQuestionDetailApi };
