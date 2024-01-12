import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../app/features/auth";
import { useGetFormQuery } from "../../app/services/formstack";
import { useGetTranslationMutation } from "../../app/services/openAi";

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
  const [translationLanguage, setTranslationLanguage] = useState("English");
  const [hasFieldTranslations, setHasFieldTranslations] = useState(false);
  const [hasTranslatedForm, setHasTranslatedForm] = useState(false);
  const [translatedFormId, setTranslatedFormId] = useState("");

  const handleFormSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    navigate(`/forms/${e.target.value}`);
  };

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
            colspan: field.colspan,
          }))
      );
    }
  }, [data]);

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
          <p>Translate This Form To:</p>
          <select onChange={(e) => handleSelectTranslationLanguage(e)}>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Mandarin">Mandarin</option>
            {/* Add more language options as needed */}
          </select>
          <Button text="Translate Form" handler={handleTranslation} />
        </Styled.TranslationContainer>
      </Styled.Wrapper>
    </Styled.Page>
  );
};

export default TranslateForm;
