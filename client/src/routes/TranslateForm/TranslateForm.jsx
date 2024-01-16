import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../app/features/auth";
import { useGetFormQuery } from "../../app/services/formstack";
import { useGetTranslationMutation } from "../../app/services/openAi";
import { supportedLanguages } from "../../app/store";

import BeatLoader from "react-spinners/BeatLoader";

import { Button, TranslationComparison } from "../../components";

import * as Styled from "./styles";

const TranslateForm = () => {
  const { id } = useParams();
  const {
    user: { token },
    isAuthenticated,
  } = useSelector(userSelector);
  const { data, isLoading } = useGetFormQuery({ id, token });
  const [
    getTranslation,
    { data: translationData, isLoading: isTranslationLoading },
  ] = useGetTranslationMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);
  const [fieldTranslations, setFieldTranslations] = useState([]);
  const [translationLanguage, setTranslationLanguage] = useState("Spanish");
  const [hasFieldTranslations, setHasFieldTranslations] = useState(false);
  const [hasTranslatedForm, setHasTranslatedForm] = useState(false);
  const [translatedFormId, setTranslatedFormId] = useState("");

  useEffect(() => {
    if (data) {
      setFormData({
        id: data?.id,
        name: data?.name,
        columns: data?.num_columns,
        submitButtonTitle: data?.submit_button_title,
      });

      setFormFields(
        data?.fields
          .filter((field) => field.label !== "")
          .map((field) => ({
            id: field.id,
            label: field.label,
            type: field.type,
            subfields:
              field?.visible_subfields?.map((subfield, index) => ({
                index,
                label: subfield,
              })) || [],
            colspan: field.colspan,
          }))
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  useEffect(() => {
    console.log(fieldTranslations);
  }, [fieldTranslations]);

  useEffect(() => {
    if (hasFieldTranslations) {
      setHasFieldTranslations(false);
      navigate(`/forms/${translatedFormId}`);
    }
  }, [hasTranslatedForm]);

  const handleSelectTranslationLanguage = (e) => {
    const language = e.target.value;

    setTranslationLanguage(language);
  };

  const handleTranslation = async () => {
    try {
      const translationRequests = formFields.flatMap((field) => {
        // Translate the main field
        const mainFieldTranslation = getTranslation({
          translationText: field.label,
          language: translationLanguage,
        }).unwrap();

        // Translate subfields if they exist
        const subfieldTranslations = field.subfields.map((subfield) =>
          getTranslation({
            translationText: subfield.label,
            language: translationLanguage,
          }).unwrap()
        );

        return [mainFieldTranslation, ...subfieldTranslations];
      });

      const translations = await Promise.all(translationRequests);

      // Process translations and update state
      let translationIndex = 0;
      const updatedTranslations = formFields.map((field) => {
        const translatedField = {
          ...field,
          translatedLabel: translations[translationIndex].response,
        };
        translationIndex++;

        if (field.subfields) {
          translatedField.translatedSubfields = field.subfields.map(
            (subfield) => {
              const translatedSubfield = {
                ...subfield,
                translatedLabel: translations[translationIndex].response,
              };
              translationIndex++;
              return translatedSubfield;
            }
          );
        }

        return translatedField;
      });

      setFieldTranslations(updatedTranslations);
      setHasFieldTranslations(true);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  if (!isAuthenticated)
    return (
      <section>
        <p>Log in to your Formstack account to see your Forms here!</p>
      </section>
    );

  if (isLoading || isTranslationLoading) return <BeatLoader />;

  if (hasFieldTranslations)
    return (
      <TranslationComparison
        userToken={token}
        formData={formData}
        translatedFormFields={fieldTranslations}
        language={translationLanguage}
        translatedFormId={translatedFormId}
        handleTranslatedFormId={setTranslatedFormId}
        handleTranslatedForm={setHasTranslatedForm}
      />
    );

  return (
    <Styled.Page>
      <Styled.Wrapper>
        <Styled.FormFieldsContainer>
          <h1>Form Fields to Translate</h1>
          <Styled.TranslationDisplay>
            {data?.fields?.map((field) => (
              <Styled.DisplayedField key={field?.id}>
                <p>{field?.label}</p>
                {field?.visible_subfields?.map((subfield) => (
                  <p key={subfield}>{subfield}</p>
                ))}
              </Styled.DisplayedField>
            ))}
          </Styled.TranslationDisplay>
        </Styled.FormFieldsContainer>
        <Styled.TranslationContainer>
          <p>Translate This Form To:</p>
          <select onChange={(e) => handleSelectTranslationLanguage(e)}>
            {supportedLanguages.map((language) => (
              <option key={language.name} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
          <Button text="Translate Form" handler={handleTranslation} />
        </Styled.TranslationContainer>
      </Styled.Wrapper>
    </Styled.Page>
  );
};

export default TranslateForm;
