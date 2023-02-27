import About from "@components/about";
import Container from "@components/container";
import Intro from "@components/intro";
import Layout from "@components/layout";
import AboutType from "@interfaces/about";
import { getAbout } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";

type Props = {
  about: AboutType;
};

const AboutPage = ({ about }: Props) => (
  <Layout>
    <Container>
      <Intro />
      <About about={about} />
    </Container>
  </Layout>
);

export default AboutPage;

export const getStaticProps = async () => {
  const about = getAbout();
  const content = await markdownToHtml(about.content || "");
  return {
    props: {
      about: {
        ...about,
        content,
      },
    },
  };
};
