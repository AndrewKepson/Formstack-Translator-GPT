import { useState, useEffect } from "react";
import { useGetTranslationMutation } from "../../app/services/openAi";

import BeatLoader from "react-spinners/BeatLoader";

const TranslateForm = () => {
  const [getTranslation, { data, isLoading, error: translationError }] =
    useGetTranslationMutation();

  const [translation, setTranslation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await fetch(`http://localhost:3001/translate`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTranslation(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTranslation();
  }, []);

  if (loading) return <BeatLoader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Translate Form</h1>
      {translation && (
        <div>
          <p>Translation: {translation.response}</p>
        </div>
      )}

      {/* Dropdown Pulls all Forms; Handler Select Form and then Redirect to /form/id */}
    </>
  );
};

export default TranslateForm;
