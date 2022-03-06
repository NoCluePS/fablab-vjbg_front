import React from "react";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SectionWrapper } from "components/wrappers/SectionWrapper";

const ProjectPage = () => {
  const router = useRouter();
  const { project_id } = router.query;

  return (
    <SectionWrapper>
      <Text>{project_id}</Text>
    </SectionWrapper>
  );
};

export default ProjectPage;
