import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(content: string) {
  if (content.startsWith("<")) {
    const result = await remark().process(content)
    return result.toString()
  }
  const result = await remark().use(html).process(content)
  return result.toString()
}
