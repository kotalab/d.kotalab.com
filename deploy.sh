set -e

echo "Deploy start"

JEKYLL_ENV=production bundle exec jekyll build

git config --global user.name kotala
git config --global user.email kotarolab@gmail.com

rm -rf /tmp/kotalab.com
cp -R _site /tmp/kotalab.com

git reset --hard HEAD
git checkout -b gh-pages
git remote add upstream https://$GH_TOKEN@github.com/kotalab/kotalab.com.git

rm -rf *
cp -R /tmp/kotalab.com/* .
echo kotalab.com > CNAME

git add -A
git commit -m Deploy
git push upstream gh-pages --force

echo "Deploy success"

git checkout master
git branch -D gh-pages