import { TopicsEnum } from "../components/topics/types";
import { DECLARATIVE_PROGRAMMING } from "./declarative-programming";
import { IMPERATIVE_PROGRAMMING } from "./imperative-programming";

const codeExamplesMap: Record<TopicsEnum, any> = {
  [TopicsEnum.DECLARATIVE_PROGRAMMING]: DECLARATIVE_PROGRAMMING,
  [TopicsEnum.IMPERATIVE_PROGRAMMING]: IMPERATIVE_PROGRAMMING,
};

export default codeExamplesMap;
