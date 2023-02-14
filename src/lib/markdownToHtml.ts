import { unified } from 'unified'
import rehypeHighlight from 'rehype-highlight'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'

export default async function markdownToHtml(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .process(content)
  return result.toString()
}
