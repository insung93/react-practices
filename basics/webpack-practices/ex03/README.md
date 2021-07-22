## webpack-practice: ex03
1. 프로젝트 생성
```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```
2. 프로젝트 구조
    <pre>
      /ex01
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- main.js
        |--- src
        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js [webpack 설정 파일]
    <pre>
3. webpack.config.js
```js
const path = require('path');
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path : path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
```

4. 빌드하기
```bash
$ npx webpack
```


3. test server 실행
```bash
$ npx webpack serve --progress
```
ES6 모듈로 실행(확장자를 .mjs) 해야 함.




