# Angular project structure for Superbench demo

Below is the folder structure of the current application, following features-based approach.

```
┣ dist #build folder
┣ docs # technical documents ( code conventions, code structure, , style guide,.. )
┃ ┗ structure.md
┣ src # main base url of the whole application
┃ ┣ app # all application code
┃ ┃ ┣ auth # all app-authentication stuffs will be placed here ( login, logout, register ...)
┃ ┃ ┃ ┣ constants # auth constant
┃ ┃ ┃ ┃ ┗ auth.constant.ts
┃ ┃ ┃ ┣ login # login features ( grow to other if any ( register, logout, forgot password .. ))
┃ ┃ ┃ ┃ ┣ components # store all login-related component
┃ ┃ ┃ ┃ ┃ ┣ ...
┃ ┃ ┃ ┃ ┣ login.component.html
┃ ┃ ┃ ┃ ┗ login.component.ts
┃ ┃ ┃ ┣ services # auth common services
┃ ┃ ┃ ┃ ┗ auth.service.ts
┃ ┃ ┃ ┗ types # auth common types
┃ ┃ ┃ ┃ ┗ auth.type.ts
┃ ┃ ┣ config # all app-level configuration with 3rd party libs/package ( firebase, aws...)
┃ ┃ ┃ ┗ firebase.ts
┃ ┃ ┣ core # all app-level common stuffs that folder structure will be replicated in each app's specific module ( service, constant, interface, types, ...)
┃ ┃ ┃ ┣ constants
┃ ┃ ┃ ┃ ┗ app.constant.ts
┃ ┃ ┃ ┣ interfaces
┃ ┃ ┃ ┃ ┗ firebase.interface.ts
┃ ┃ ┃ ┣ services
┃ ┃ ┃ ┃ ┣ error.service.ts
┃ ┃ ┃ ┃ ┗ firebase.service.ts
┃ ┃ ┃ ┗ types
┃ ┃ ┃ ┃ ┗ app.type.ts
┃ ┃ ┣ features # specific main feature/modules of app ( ex: chat, ...)
┃ ┃ ┃ ┣ chat # the structure inside will be almost identical with above "core" folder
┃ ┃ ┃ ┃ ┣ components
┃ ┃ ┃ ┃ ┃ ┣ chat-box
┃ ┃ ┃ ┃ ┃ ┣ ...
┃ ┃ ┃ ┃ ┃ ┣ chat.component.html
┃ ┃ ┃ ┃ ┃ ┗ chat.component.ts
┃ ┃ ┃ ┃ ┣ constants
┃ ┃ ┃ ┃ ┃ ┗ ...
┃ ┃ ┃ ┃ ┣ services
┃ ┃ ┃ ┃ ┃ ┗ ...
┃ ┃ ┃ ┃ ┣ states # storing all chat's related state data
┃ ┃ ┃ ┃ ┃ ┗ ...
┃ ┃ ┃ ┃ ┣ types
┃ ┃ ┃ ┃ ┃ ┗ ...
┃ ┃ ┃ ┃ ┣ chat.module.ts # chat module to unify all related components,services...
┃ ┃ ┃ ┃ ┗ chat.routes.ts # chat routes
┃ ┃ ┣ shared # store all app-level components
┃ ┃ ┃ ┗ components
┃ ┃ ┃ ┃ ┣ toast
┃ ┃ ┃ ┃ ┃ ┣ toast.component.ts
┃ ┃ ┃ ┃ ┃ ┣ toast.service.spec.ts
┃ ┃ ┃ ┃ ┃ ┗ toast.service.ts
┃ ┃ ┃ ┃ ┗ card.component.ts
┃ ┃ ┣ shell # store all common page shell/layout ( header, footer, not-found page ...)
┃ ┃ ┃ ┗ page-404
┃ ┃ ┃ ┃ ┗ page-404.component.ts
┃ ┃ ┣ app.component.html
┃ ┃ ┣ app.component.spec.ts
┃ ┃ ┣ app.component.ts
┃ ┃ ┣ app.config.ts # app config for mapping all app-level third-party module import
┃ ┃ ┗ app.routes.ts
┃ ┣ assets # all assets related ( images, fonts, styles , ...)
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ main.ts # entry file to bootstrap our application
┃ ┗ styles.css # global styling file
┣ .editorconfig # common code formatter
┣ .eslintrc.json # lint config for app
┣ .firebaserc # firebase config for deployment
┣ .gitignore
┣ README.md # App single source of documentation reference
┣ angular.json
┣ package-lock.json
┣ package.json
┣ tailwind.config.js # config file for tailwind css
┣ tsconfig.app.json
┣ tsconfig.json
┣ tsconfig.spec.json
┗ yarn.lock

```
