import { checkBoxComponent } from "./QuestionCheckbox";
import { infoComponent } from "./QuestionInfo";
import { inputComponent } from "./QuestionInput";
import { paragraphComponent } from "./QuestionParagraph";
import { radioComponent } from "./QuestionRadio";
import { rateComponent } from "./QuestionRate";
import { textareaComponent } from "./QuestionTextArea";
import { titleComponent } from "./QuestionTitle";

const componentList = [
  infoComponent,
  inputComponent,
  radioComponent,
  textareaComponent,
  rateComponent,
  paragraphComponent,
  titleComponent,
  checkBoxComponent,
];

function getComponentByType(type: string) {
  return componentList.find((i) => i.type === type);
}

export { componentList, getComponentByType };
