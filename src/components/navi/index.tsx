import Link from 'next/link';
import styles from './navi.module.css'

interface Link {
    title: string;
    url: string;
}
const data: Link[] = [
    { title: "トップページ", url: "/"},
    { title: "このサイトについて", url: "/about"},
    { title: "記事一覧", url: "/posts"},
]
const Navi = () => {
    return (
        <nav className={styles.container}>
            <ul>
                { data.map((link)=> {
                    return <li key={link.url}>
                        <Link href={link.url} className={styles.link}>
                            {link.title}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navi
