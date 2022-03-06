import { Grid } from "@chakra-ui/react";
import { GetProjects } from "api";
import { ProjectCard } from "components/items/ProjectCard";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    GetProjects().then(({ data }) => {
      if (data) {
        setProjects(data);
      }
    });
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div>
      <Head>
        <title>VJBG FABLAB</title>
        <meta
          name="description"
          content="Vilniaus Jono Basanavičiaus Gimnazijos FABLAB darbai"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionWrapper>
        <Grid mx={1} templateColumns="repeat(3, 1fr)" mt={5} gap={3}>
          {!!projects.length &&
            projects.map((project: any) => (
              <ProjectCard onClick key={project.ID} {...project} />
            ))}
        </Grid>
      </SectionWrapper>
    </div>
  );
};

export default Home;
