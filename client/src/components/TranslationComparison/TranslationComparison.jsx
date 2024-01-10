import { useCreateFormMutation } from "../../app/services/formstack";

import * as Styled from "./styles";

import { Button } from "..";

const TranslationComparison = ({ userToken, translatedFormFields }) => {
  const [createForm, { data, isLoading }] = useCreateFormMutation();

  const createTranslatedForm = async () => {
    createForm({
      token: userToken,
      formName: "Translated Form",
      formFields: translatedFormFields,
    });

    console.log("Form Created");
  };

  return (
    <Styled.Container>
      <Styled.FormsComparisonContainer>
        <Styled.FormFieldsDisplay>
          <h2>Original Language</h2>
          {translatedFormFields.map((field) => (
            <p key={field.id}>{field.label}</p>
          ))}
        </Styled.FormFieldsDisplay>
        <Styled.FormFieldsDisplay>
          <h2>Translated Language</h2>
          {translatedFormFields.map((field) => (
            <p key={field.id}>{field.translatedLabel}</p>
          ))}
        </Styled.FormFieldsDisplay>
      </Styled.FormsComparisonContainer>
      <section>
        <Button text="Accept Translations" handler={createTranslatedForm} />
      </section>
    </Styled.Container>
  );
};

export default TranslationComparison;
