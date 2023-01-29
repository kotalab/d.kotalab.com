[![Netlify Status](https://api.netlify.com/api/v1/badges/96fa04d4-29a4-44d8-a151-9f6f7129d8d4/deploy-status)](https://app.netlify.com/sites/frosty-ardinghelli-38d34c/deploys)
# [d.kotalab.com](https://d.kotalab.com)
My blog is open source, everyone can contribute :smile:

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to run local server?
```
$ git clone https://github.com/kotalab/d.kotalab.com.git
$ cd d.kotalab.com
$ yarn install
$ yarn dev
Open http://127.0.0.1:3000/
```
