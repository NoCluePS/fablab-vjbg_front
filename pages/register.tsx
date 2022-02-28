import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Text } from "@chakra-ui/react";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Formik } from "formik";
import { FormInput } from "components/items/Input";
import { useRouter } from "next/router";
import Link from "next/link";
import { RegisterFunc } from "api";

const Login = () => {
  const router = useRouter();

  return (
    <SectionWrapper>
      <LoginWrapper>
        <Text color="gray.500" fontWeight={700} mb={2} fontSize="1.25rem">
          Register
        </Text>
        <CardWrapper>
          <Formik
            initialValues={{
              email: "",
              password: "",
              secret: "",
              name: "",
              confirmPassword: "",
            }}
            validate={({ email, password, confirmPassword }) => {
              const errors: any = {};

              if (!email) {
                errors.email = "Required!";
              } else if (!password) {
                errors.password = "Required!";
              } else if (password !== confirmPassword) {
                errors.password = "Should match!";
                errors.confirmPassword = "Should match!";
              }

              if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
                !errors.email
              ) {
                errors.email = "Invalid email address!";
              }

              return errors;
            }}
            onSubmit={({ email, password, name, secret }) => {
              RegisterFunc(email, password, name, secret);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Box maxW={350}>
                <form onSubmit={handleSubmit}>
                  <FormInput
                    name="email"
                    placeHolder="Enter an email address"
                    title="Email"
                    type="email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                  <FormInput
                    name="name"
                    placeHolder="Enter an name"
                    title="Name"
                    type="name"
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                  />
                  <Box gap={4} display="flex">
                    <FormInput
                      name="password"
                      placeHolder="Enter password"
                      title="Password"
                      type="password"
                      value={values.password}
                      error={errors.password}
                      onChange={handleChange}
                    />
                    <FormInput
                      name="confirmPassword"
                      placeHolder="Confirm password"
                      title="Confirm Password"
                      type="password"
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      onChange={handleChange}
                    />
                  </Box>
                  <FormInput
                    name="secret"
                    placeHolder="Secret registration key"
                    title="Secret"
                    type="password"
                    value={values.secret}
                    error={errors.secret}
                    onChange={handleChange}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={4}
                  >
                    <Button w="40" colorScheme="blue" type="submit">
                      Register
                    </Button>
                  </Box>
                  <Text mt={3} align="right">
                    Already have an account? <Link href="/login">Login</Link>
                  </Text>
                </form>
              </Box>
            )}
          </Formik>
        </CardWrapper>
      </LoginWrapper>
    </SectionWrapper>
  );
};

const CardWrapper = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.5rem 1.5rem 1.5rem;
  border-radius: 2rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6.5rem);
`;

export default Login;
