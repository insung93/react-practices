## ex07: CRA 로 만든 Application 직접 설정해서 만들어 보기

1.  프로젝트 생성
    ```bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader sass-loader node-sass file-loader
    $ npm i react react-dom
    ```
2.  프로젝트 디렉토리
    <pre>
      /ex07
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |--- src
        |--- webpack.config.js
        |--- babel.config.json
    <pre>

3.  scripts
    "scripts": {
      "start": "npx webpack serve --progress",
      "build": "npx webpack"
    }

4.  빌드(번들링)
    ```bash
    $ npm run build
    ```

5.  test(개발 서버 실행)
    ```bash
    $ npm start
    ```