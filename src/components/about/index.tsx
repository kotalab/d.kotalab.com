import styles from './about.module.css'
import AboutType from '../../interfaces/about'
import PostBody from '../post/post-body'

type Props = {
    about: AboutType
}

const About = ({ about }: Props) => {
    return (
        <PostBody content={about.content} />
    )
}

export default About
