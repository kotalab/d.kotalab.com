import PostBody from "@components/post/post-body";
import AboutType from "@interfaces/about";

type Props = {
  about: AboutType;
};

const About = ({ about }: Props) => <PostBody content={about.content} />;

export default About;
