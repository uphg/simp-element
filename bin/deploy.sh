#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm build:docs &&

# 进入生成的文件夹
cd dist-docs &&

git init &&
git add -A &&
git commit -m 'deploy' &&

git push -f git@github.com:uphg/sim-element.git master:gh-pages
git push -f git@gitee.com:uphg/sim-element.git master:gh-pages

cd -
