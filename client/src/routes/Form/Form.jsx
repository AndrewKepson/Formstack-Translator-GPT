import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../app/features/auth";
import { useGetFormQuery } from "../../app/services/formstack";

import BeatLoader from "react-spinners/BeatLoader";
import { Button } from "../../components";

import * as Styled from "./styles";

const Form = () => {
  const { id } = useParams();
  const {
    user: { token },
  } = useSelector(userSelector);
  const { data, isLoading } = useGetFormQuery({ id, token });

  const navigate = useNavigate();

  console.log(data);
  if (isLoading) return <BeatLoader />;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <div dangerouslySetInnerHTML={{ __html: data?.html }} />
      </Styled.Wrapper>
      <Styled.ButtonWrapper>
        <Button
          text="Translate This Form"
          handler={() => navigate(`/forms/${id}/translate`)}
        />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default Form;
