import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

function main() {
    const slugs = getPostSlugs()
    slugs.forEach((slug) => {
      const fullPath = getPostFullPath(slug)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      fillOgImage(data, fileContents, fullPath)
    })
}

function fillOgImage(data: { [key: string]: any }, fileContents: string, fullPath: string) {
  if (data['ogImage'] === undefined) {
    const appendingData = ['ogImage:', '  url:']
    fileContents.split('\n').forEach((line, index) => {
      if (line.startsWith("comments:")) {
        const splited = fileContents.split('\n')
        const top = splited.slice(0, index)
        const bottom = splited.slice(index)
        const newContent = top.concat(appendingData, bottom).join('\n')
        fs.writeFileSync(fullPath, newContent, 'utf8')
      }
    })
  }
}

function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function getPostFullPath(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    return join(postsDirectory, `${realSlug}.md`)
}

main()
