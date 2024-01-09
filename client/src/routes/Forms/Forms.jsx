import { useSelector } from "react-redux";
import { useGetFormsQuery } from "../../app/services/formstack";

import { userSelector } from "../../app/features/auth";

import * as Styled from "./styles";

const Forms = () => {
  const { user, isAuthenticated } = useSelector(userSelector);

  const { data } = useGetFormsQuery(user.token);

  if (!isAuthenticated)
    return (
      <section>
        <p>Log in to your Formstack account to see your Forms here!</p>
      </section>
    );

  return (
    <section>
      <Styled.Container>
        <h1>My Forms</h1>
        <Styled.Forms>
          {data?.forms?.map((form) => (
            <div key={form.id} form={form} />
          ))}
          {/* Add delete button & edit button */}
        </Styled.Forms>
      </Styled.Container>
    </section>
  );
};

export default Forms;
