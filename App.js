import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import { useState } from 'react';
import { userDataContext } from './src/context';
import Home from './src/Screens/Home';
import 'react-native-get-random-values';
import CommentsScreen from './src/Screens/CommentsScreen';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto': require('./src/assets/fonts/Roboto-Regular.ttf'),
    // prettier-ignore
  });
  const [user, setUser] = useState(null);
  const [publications, setPublications] = useState([]);
  const [isProfile, setIsProfile] = useState(false);

  if (!fontsLoaded) return null;

  return (
    <userDataContext.Provider
      value={{
        user,
        setUser,
        publications,
        setPublications,
        isProfile,
        setIsProfile,
      }}
    >
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={user ? 'Home' : 'Register'}>
          {!user && (
            <MainStack.Screen
              name="Register"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
          )}
          {!user && (
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          )}

          {user && (
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          )}
          {user && (
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{ title: 'Коментарі', headerTitleAlign: 'center' }}
            />
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </userDataContext.Provider>
  );
}
