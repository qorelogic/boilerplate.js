
if [ ! -f package.json ]; then
echo 'npm init..'
npm init
fi

if [ -f package.json ]; then
echo 'installing webpack..'
npm install --save-dev webpack

echo 'installing babel..'
npm install --save-dev babel-core babel-preset-es2015
npm install --save-dev babel-loader
fi
