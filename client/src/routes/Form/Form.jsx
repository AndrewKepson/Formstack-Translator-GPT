import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../app/features/auth";
import { useGetFormQuery } from "../../app/services/formstack";
import { useGetTranslationMutation } from "../../app/services/openAi";

import BeatLoader from "react-spinners/BeatLoader";
import { Button, TranslationComparison } from "../../components";

import * as Styled from "./styles";

const Form = () => {
  const { id } = useParams();
  const {
    user: { token },
  } = useSelector(userSelector);
  const { data, isLoading } = useGetFormQuery({ id, token });
  const [
    getTranslation,
    { data: translationData, isLoading: isTranslationLoading },
  ] = useGetTranslationMutation();
  console.log(data);
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);
  const [fieldTranslations, setFieldTranslations] = useState([]);
  const [translationLanguage, setTranslationLanguage] = useState("English");
  const [hasTranslatedForm, setHasTranslatedForm] = useState(false);

  useEffect(() => {
    if (data) {
      setFormFields(
        data?.fields
          .filter((field) => field.label !== "")
          .map((field) => ({
            id: field.id,
            label: field.label,
            type: field.type,
            colspan: field.colspan,
          }))
      );
    }
  }, [data]);

  useEffect(
    () => console.log(`New Translation Language Set: ${translationLanguage}`),
    [translationLanguage]
  );

  useEffect(() => {
    console.log(`Updated translation data: ${formFields}`);
  }, [formFields]);

  const handleSelectTranslationLanguage = (e) => {
    const language = e.target.value;

    setTranslationLanguage(language);
  };

  const handleTranslation = async () => {
    try {
      const translationPromises = formFields.map((field) =>
        getTranslation({
          translationText: field.label,
          language: translationLanguage,
        }).unwrap()
      );

      const translations = await Promise.all(translationPromises);

      const updatedTranslations = translations.map((t, index) => ({
        ...formFields[index],
        translatedLabel: t.response,
      }));

      setFieldTranslations(updatedTranslations);
      setHasTranslatedForm(true);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  if (isLoading || isTranslationLoading) return <BeatLoader />;

  if (hasTranslatedForm)
    return (
      <TranslationComparison
        userToken={token}
        translatedFormFields={fieldTranslations}
      />
    );

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.FormFieldsContainer>
          {data?.fields?.map((field) => (
            <div key={field?.id}>
              <p>{field?.label}</p>
              {translationData && field.id === translationData.fieldId && (
                <p>Translation: {translationData.translation}</p>
              )}
            </div>
          ))}
        </Styled.FormFieldsContainer>
        <Styled.TranslationContainer>
          <p>Translate to:</p>
          <select onChange={(e) => handleSelectTranslationLanguage(e)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Mandarin">Mandarin</option>
            {/* Add more language options as needed */}
          </select>
          <Button text="Translate" handler={handleTranslation} />
        </Styled.TranslationContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Form;
