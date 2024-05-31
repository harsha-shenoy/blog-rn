import React from "react";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Index',
  // screenOptions: {
  //   headerStyle: { backgroundColor: 'tomato' },
  // },
  screens: {
    Index: {
      screen: IndexScreen,
      options: {
        title: 'Blog',
      },
    },
    Show: {
      screen: ShowScreen,
      options: {
        title: 'Blog Detail',
      },
    },
    Create: {
      screen: CreateScreen,
      options: {
        title: 'Create Blog',
      },
    },
    Edit: {
      screen: EditScreen,
      options: {
        title: 'Edit Blog',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return <Navigation />;
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Search">
  //       <Stack.Screen
  //         name="Index"
  //         component={IndexScreen}
  //         options={{ title: "Blog" }}
  //       />
  //       <Stack.Screen
  //         name="Show"
  //         component={ShowScreen}
  //         options={{ title: "Blog Detail" }}
  //       />
  //       <Stack.Screen
  //         name="Create"
  //         component={CreateScreen}
  //         options={{ title: "Create Blog" }}
  //       />
  //       <Stack.Screen
  //         name="Edit"
  //         component={EditScreen}
  //         options={{ title: "Edit Blog" }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
