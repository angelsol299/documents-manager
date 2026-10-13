# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# documents-manager

# Libraries/packages disclosure

## State management

Redux, Zustand and Context API were consider to be used as state management tools. I decided to go with Context API since that one comes out of the box and does not need further installation/mantainability. The size of the app is very small that is not worth it adding a 3rd party state management tool.

## documents picker

I used expo-document-picker since it is the official module to implement a documents picker and I did not consider other libraries/packages.

## Styling / Design system

I went for bare styling directly into the components with StyleSheet so not 3rd party library was used, I added a Design namespace to use it as a design system.

## Icons

I used @expo/vector-icons since this is the official module to consume icons and I did not consider other libraries/packages.

## API calls

I used the native fetch since it was only one GET call that was needed and the native fetch fulfilled the needs of this project.

## Testing

I did not have enough time to implement any testing, I would have gone for adding unit test of the following functions;

- documentFormat
- sortDocumentsByMostRecentDate
- sortDocumentsByOldestDate
- contributorsItems
- sortDocumentsByMostRecentDate
- getDocumentAsync

I would also have added Component tests on:

- Cards
- AddDocumentModal
- FilterModal
- Header
- Footer
- Card
- FilterAndLayout

## AI disclosure

AI assisted tools were NOT used to write any code, NEITHER code prediction tools were used. AI was used only at the beginning of this project to remove boiler plate code/files/assets and to start with a minimal project.

Google and official documentations were mostly used to implemented methods/libraries I was not familiar with or did not use before.
