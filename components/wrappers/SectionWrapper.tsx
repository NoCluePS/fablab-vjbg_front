import { Box } from "@chakra-ui/react";
import React from "react";

export const SectionWrapper: React.FC = ({ children }) => {
  return (
    <Box mx="auto" maxW="3xl">
      {children}
    </Box>
  );
};
