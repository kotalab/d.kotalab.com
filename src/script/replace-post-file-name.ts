import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostFullPath(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  return join(postsDirectory, `${realSlug}.md`);
}

function main() {
  const slugs = getPostSlugs();

  slugs.forEach((slug) => {
    const oldPath = getPostFullPath(slug);
    const newPath = getPostFullPath(slug.slice(11));
    // eslint-disable-next-line no-console
    fs.rename(oldPath, newPath, (error) => console.error(error));
  });
}

main();
