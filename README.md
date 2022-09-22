# Weather application - React Native
  
The  Weather application in React Native is allows check current weather and weather for the next few days 🔥.


## Getting started
### Hardware requirements
- Android Studio
- Select mobile  `Pixel Pixel_4_API_29`
 or
- if you would like quickly look how it works you can check that in web browser (don't forget to switch to mobile view )
- The application has been tested for the following environments

```
node: 16.15.1
yarn: 1.22.4
```

### Steps to run application
   1. Create an account and log in to the application [OpenWeather](https://openweathermap.org/appid)
   2. Create api-key
   3. Clone project - [Weather application](https://github.com/KlaraGajaszek/WeatherApp-ReactNative)
   4.  Change file's name in src from .env.example to .env and paste your key insted of " "
   5. Run `yarn install` in terminal
   6. Run `expo start`
   7. Select a (if you would like to open in android studio) or w (if you would like to open in web browser)
   
## Architecture

### Root files and folders
- [**.storybook**](.storybook)
- [**.assets**](.assets)
  - [**.src**](.src)
    - [**types**](types)
    - [**components**](components)
      - [**atoms**](components/atoms)
      - [**molecules**](components/molecules)
      - [**organisms**](components/organisms)
      - [**pages**](components/pages)
    - [**constants**](constants)
    - [**context**](context)
    - [**helpers**](helpers)
    - [**mocked**](mocked)
    - [**services**](services)
    - [**utils**](utils)
- [**.env**](.env)
- [**.eslintrc.js**](.eslintrc.js)
- [**prettierrc.js**](.prettierrc.js)
- [**app.json**](app.json)
- [**App.tsx**](App.tsx)
- [**babel.config.js**](babel.config.js)
- [**jest.config.js**](jest.config.js)
- [**tsconfig.eslint.json**](tsconfig.eslint.json)
- [**tsconfig.json**](tsconfig.json)


************************************

**storybook** - in this folder there is all configuration for storybook. More information can you find in Storybook section.

**assets** - in this folder there is all icons, images, fonts which are use for example for favicon in web version. All use you can find in app.json file.

**src** - workspaces with code representing different parts of the project. You can read more about them in the next section.

**.env** - There is file for environment variable 

**.github** - GitHub-related configuration.

**eslintrc.js** - global configuration file for the ESLint - static code analysis tool we use to keep our code style consistent.

**.gitignore** - list of all files and directories across the entire monorepo that Git should ignore.

**.prettierrc.js** - Prettier configuration for the entire project.


**app.json** - one of React Native configuration files. Contains config for website.

**jest.config.ts** - configuration for the Jest testing framework.

**package.json** - root project configuration file. It contains devDependencies reused across the entire project and workspaces configuration.

**README.md** - basic description of the project. It shouldn't cover too many details about the project development as those are covered by this documentation.

**tsconfig.eslint.json** - an extended version of the tsconfig.base.json that includes all JS, TS, and TSX files across the project.

**yarn.lock** - file with locked versions of project's dependencies.

### src files and folders

**types** - in this folder there are modules types declarations.

**components** - this folder consists of the atoms, molecules, organisms, pages. This structure represents [atomic design](https://atomicdesign.bradfrost.com/chapter-2/). I tried build small, modularized components and then consisting of them bigger and bigger ( organisms and pages)

**constants** - in this folder there is const variables which are use in all src folder. In the future I would like to add i18 to project and then replace constants folder with another.

**context** - weatherContext - in the weather context I fetched data from OpenWeather api using hooks from services. I use context because I would like to avoid `prop drilling` and now we can take data from anywhere place in the app.

**helpers** - in this folder there are functions which are used in various places in the app

**mocked** - in this folder there are mocked data which are uses for tests and stories in storybook.

**services** - in this folder there are request for api services. One hook is responsible for one request.

**utils** - folder for other `utils` files. Now in this folder there is theme for styled components.

**tests-utils** - files with wrappers for tests cases.

##### Styles

For create style I used [styled component](https://styled-components.com) and create customization's theme.

## Storybook

Every atom, molecule and organisms has special stories. When you run storybook then you can see all isolated components. It is really useful when we work in big team and change/add components really fast or we would like to see how it looks like without run application.
## Tests

For tests I used Jest and react-native-testing-library. Tests is not completed. Now I added only examples, in the next iteration when I would like to develop this app I will add tests for other components and create mostly integration tests.  




