#!/bin/bash
rm -rf ./package/components
rm -rf ./package/assets
cp -R ./src/components/ ./package/components
cp -R  ./src/assets/ ./package/assets

cp -R ./package/components/ /Users/xianxiangzheng/Projects/NewMall/code/cml-mall/node_modules/chameleon-ui-builtin/components
cp -R ./package/assets/ /Users/xianxiangzheng/Projects/NewMall/code/cml-mall/node_modules/chameleon-ui-builtin/assets
