import React from "react";
import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
import { SectionWrapper } from "../components/wrappers/SectionWrapper";

const Login = () => {
  return (
    <SectionWrapper>
      <LoginWrapper>
        <CardWrapper></CardWrapper>
      </LoginWrapper>
    </SectionWrapper>
  );
};

const CardWrapper = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1.5rem;
  border-radius: 2rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6.5rem);
`;

export default Login;
