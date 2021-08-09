## React Pracractices - Integration(개발 환경 통합)

### Configuration
1. Application(Project) Structure
    <pre>
        /app
          |--- /backend
          |        |--- /logging
          |        |       |--- index.js
          |        |--- /routes
          |        |       |--- [index.js]
          |        |       |--- authorized.js
          |        |       |--- [error.js]
          |        |--- /controllers
          |        |--- /models
          |        |--- /views
          |        |       |--- /error
          |        |               |--- [404.ejs]
          |        |               |--- [500.ejs]
          |        |--- /public
          |        |--- [index.js]
          |        |--- [app.config.env]
          |--- /frontend
          |--- /node_modules
          |--- package.json
          |--- package-lock.json
    </pre>

2. nodemon
3. webpack dev server
4. package.json
5. node application

### Application
1. app01.emaillist
    - 개발 통합 설정(with Node Backend)
    - backend : Fully APIs(Node Express 기반)
    - Frontend : React(SPA)
    - AJAX : fetch 기반

2. app02.kabanboard
3. app03.guestbook
4. app04.gallery
5. app05.mysite
---