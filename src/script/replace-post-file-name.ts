import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

function main() {
    const slugs = getPostSlugs()

    slugs.forEach((slug) => {
      const oldPath = getPostFullPath(slug)
      const newPath = getPostFullPath(slug.slice(11))
      fs.rename(oldPath, newPath, (error) => console.log(error))
    })
}

function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function getPostFullPath(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    return join(postsDirectory, `${realSlug}.md`)
}

main()
