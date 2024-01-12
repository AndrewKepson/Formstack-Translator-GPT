import {
  useCreateFormMutation,
  useCreateFieldMutation,
} from "../../app/services/formstack";

import * as Styled from "./styles";

import { Button } from "..";

const TranslationComparison = ({
  userToken,
  formData,
  translatedFormFields,
  language,
  translatedFormId,
  handleTranslatedFormId,
  handleTranslatedForm,
}) => {
  const [createForm, { data, isLoading }] = useCreateFormMutation();
  const [createField] = useCreateFieldMutation();

  const createTranslatedForm = async () => {
    try {
      // Await the completion of the createForm call
      const createFormResponse = await createForm({
        token: userToken,
        formName: `${formData.name} - ${language} Version`,
      }).unwrap();

      // Check if the form was successfully created and get the form ID
      if (createFormResponse && createFormResponse.id) {
        const formId = createFormResponse.id;
        console.log(formId);
        // Use formId in createField calls
        translatedFormFields.forEach(async (field) => {
          await createField({
            token: userToken,
            formId: formId,
            field: {
              label: field.translatedLabel,
              type: field.type,
              colspan: field.colspan,
            },
          });
        });

        console.log("Form and fields created");
        handleTranslatedFormId(formId);
        handleTranslatedForm(true);
      }
    } catch (error) {
      console.error("Error creating form or fields:", error);
    }
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
