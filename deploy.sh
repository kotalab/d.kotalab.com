set -e

echo "Deploy start"
JEKYLL_ENV=production bundle exec jekyll build

rm -rf /tmp/kotalab.com
cp -R _site /tmp/kotalab.com

git reset --hard HEAD
git remote add upstream https://$GH_TOKEN@github.com/kotalab/kotalab.com.git
git checkout -b gh-pages upstream/gh-pages

rm -rf *
cp -R /tmp/kotalab.com/* .
echo kotalab.com > CNAME

git add -A
git commit -m Deploy
git push upstream gh-pages --force

echo "Deploy success"

git checkout master
git branch -D gh-pages