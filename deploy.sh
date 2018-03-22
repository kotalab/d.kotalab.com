set -e

git branch -D gh-pages
JEKYLL_ENV=production bundle exec jekyll build

rm -rf /tmp/kotalab.com
cp -R _site /tmp/kotalab.com

git reset --hard HEAD
git checkout -b gh-pages origin/gh-pages

rm -rf *
cp -R /tmp/kotalab.com/* .
echo kotalab.com > CNAME

git add -A
git commit -m Deploy
git push upstream gh-pages --force

git checkout master