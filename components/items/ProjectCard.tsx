import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BsPersonCircle } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";
dayjs.extend(relativeTime);

export interface ProjectProps {
  CreatedAt: string;
  DeletedAt: null | string;
  ID: number;
  UpdatedAt: string;
  author: string;
  description: string;
  images: string;
  supervisor: string;
  title: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  author,
  description,
  images,
  supervisor,
  title,
  CreatedAt,
}) => {
  const imagesArr = images.split(",");

  return (
    <Box
      cursor="pointer"
      backgroundColor="gray.50"
      borderRadius="xl"
      boxShadow="2xl"
    >
      <Image
        borderTopRadius="xl"
        src={imagesArr[0]}
        alt="thumbnail"
        mx="auto"
        mb={1.5}
      />
      <Box py={2} px={1.5}>
        <Flex mx={2} justifyContent="space-between" alignItems="flex-start">
          <Text fontSize="1.5rem" fontFamily="heading" fontWeight={400}>
            {title}
          </Text>
          <Text fontFamily="heading" fontWeight={400}>
            {dayjs().to(dayjs(CreatedAt))}
          </Text>
        </Flex>
        <Box gap={3} mx={2} mt={1.5}>
          <Flex alignItems="center" gap={2}>
            <BsPersonCircle size="1.2rem" />
            <Text fontWeight={500}>{author}</Text>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <MdSupervisorAccount size="1.2rem" />
            <Text fontWeight={500}>{supervisor}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
