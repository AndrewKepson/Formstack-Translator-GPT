import { useGetFormsQuery } from "../../app/services/formstack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSelector } from "../../app/features/auth";

import BeatLoader from "react-spinners/BeatLoader";

const TranslateForm = () => {
  const {
    user: { token },
    isAuthenticated,
  } = useSelector(userSelector);
  const navigate = useNavigate();

  const { data, isLoading } = useGetFormsQuery(token);

  const handleFormSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    navigate(`/forms/${e.target.value}`);
  };

  if (!isAuthenticated)
    return (
      <section>
        <p>Log in to your Formstack account to see your Forms here!</p>
      </section>
    );

  if (isLoading) return <BeatLoader />;

  return (
    <>
      <h1>Select a Form to Translate!</h1>
      <div>
        <select onChange={handleFormSelect}>
          {data?.forms?.map((form) => (
            <option key={form?.id} value={form?.id}>
              {form?.name}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown Pulls all Forms; Handler Select Form and then Redirect to /form/id */}
    </>
  );
};

export default TranslateForm;
