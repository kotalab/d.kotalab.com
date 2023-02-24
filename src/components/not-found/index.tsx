import styles from './notFound.module.css'
import Link from "next/link"
import Container from "../container"
import Intro from "../intro"
import Layout from "../layout"

const NotFound = () => {
    return (
        <Layout>
            <Container>
                <Intro />
                    <div className={styles.wrapper}>
                        <div>
                            <h2>404 - Page Not Found</h2>
                            <p>ページが見つかりませんでした</p>
                        </div>
                    <Link href="/" className="hover:underline">{'>>'} トップページへ戻る</Link>
                </div>
            </Container>
        </Layout>
    )
}

export default NotFound
