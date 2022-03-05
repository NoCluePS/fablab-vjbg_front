import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { SectionWrapper } from "./wrappers/SectionWrapper";
import { useRouter } from "next/router";
import { GetCurrentUser } from "api";

export const Header = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    GetCurrentUser().then((user) => {
      setUser(user);
    });
  }, [router.pathname]);

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
            {user ? (
              <>
                <li onClick={() => router.push("/create")}>Create project</li>
                <a>{user.name}</a>
              </>
            ) : (
              <li onClick={() => router.push("/login")}>Login</li>
            )}
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
