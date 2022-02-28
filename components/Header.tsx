import React from "react";
import styled from "@emotion/styled";
import { SectionWrapper } from "./wrappers/SectionWrapper";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <SectionWrapper>
        <ContentWrapper>
          <Img
            onClick={() => router.push("/")}
            src="/logo.png"
            alt="logo"
            width="100%"
          />
          <ul>
            <li>Create project</li>
            <li onClick={() => router.push("/login")}>Login</li>
          </ul>
        </ContentWrapper>
      </SectionWrapper>
    </HeaderWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
      &:hover {
        text-decoration: underline;
        color: grey;
        cursor: pointer;
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  padding: 1rem 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Img = styled.img`
  max-width: 3rem;
`;
