Weather application - React Native
  
A  Weather application in React Native is allows check current weather and weather for the next few days. What is more this project shares 🔥.


## Getting started
### Hardware requirements
- Android Studio
- Select mobile  `Pixel Pixel_4_API_29`
or
- if you would like quicky look how it works you can check that in web browser (don't forget to switch to mobile view )
- The application has been tested for the following environments

```
node: 16.15.1
yarn: 1.22.4
```

### Steps to run application
   1. Create an account and log in to the application (OpenWeather)[https://openweathermap.org/appid]
   2. Create api-key
   3. Clone project - (Weather application)[https://github.com/KlaraGajaszek/WeatherApp-ReactNative]
   4.  Change file's name in project from _.env to .env and paste your key insted of " "
   5. Run `yarn install` in terminal
   6.  Run `expo start`
   7.  Select a (if you would like to open in android studio) or w (if you would like to open in web browser)
   
## Architecture

### Generally

- storybook - in this folder there is all configuration for storybook. More information can you find in Storybook section.
- assets - in this folder there is all icons, images, fonts which are use for example for favicon in web version. All use you can find in app.json file.
- .env - There is file for environment variable 
- .eslint.rc, prettien - in this files there is all rules which are apply in this project
- src - this folder is the heart of the application. It consists of the:
    - components - For the folder structure I use (atomic design)[https://atomicdesign.bradfrost.com/chapter-2/]. In my opinion there is really good way to organize small and medium applications. We have a clear breakdown of our components. We create small/basic component and then we build bigger ones out of them until the moment we will come to page. This way resembles playing with Lego blocks. I tried to make that each folder will have the same structure: stories, styled, test, folder with components and index.ts. Unfortunately a lot of components haven't got a tests. I am going to add this in next iteration.
    - context - weatherContext - in weather context I fetch data from OpenWeather api. I use context for that because I would like to avoid `prop drilling` and now we can take data from anywhere place in the app.   




##### Styles
##### Storybook
##### Tests
#### Others tools
##### Plans for the next iteration

