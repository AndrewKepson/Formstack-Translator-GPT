import React from "react";
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
        language: language,
      }).unwrap();

      // Check if the form was successfully created and get the form ID
      if (createFormResponse && createFormResponse.id) {
        const formId = createFormResponse.id;

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
            <Styled.DisplayedField key={field?.id}>
              <p>{field?.label}</p>
              {field?.subfields?.map((subfield) => (
                <p key={subfield?.label}>{subfield?.label}</p>
              ))}
            </Styled.DisplayedField>
          ))}
        </Styled.FormFieldsDisplay>
        <Styled.FormFieldsDisplay>
          <h2>Translated Language</h2>
          {translatedFormFields.map((field) => (
            <Styled.DisplayedField key={field?.id}>
              <p>{field?.translatedLabel}</p>
              {field?.translatedSubfields?.map((subfield) => (
                <p key={subfield?.translatedLabel}>
                  {subfield.translatedLabel}
                </p>
              ))}
            </Styled.DisplayedField>
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
