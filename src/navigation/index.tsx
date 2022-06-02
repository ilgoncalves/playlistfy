import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../shared/constants';
// Pages
import { Home, Player, Search, Playlists } from '../pages';
import { Icon, ThemeContext } from 'react-native-magnus';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme.name === 'dark';

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = 'home';
    let routes = {
      [SCREENS.HOME]: 'home',
      [SCREENS.SEARCH]: 'magnifier',
      [SCREENS.PLAYLISTS]: 'playlist',
    };
    console.log(routes[route.name]);

    return (
      <Icon
        name={routes[route.name] || iconName}
        fontSize={size}
        fontFamily="SimpleLineIcons"
        color={color}
      />
    );
  };

  const HomeTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: '#ed8936',
          tabBarInactiveTintColor: '#a0aec0',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
          },
        })}>
        <Tab.Screen name={SCREENS.HOME} component={Home} />
        <Tab.Screen name={SCREENS.SEARCH} component={Search} />
        <Tab.Screen name={SCREENS.PLAYLISTS} component={Playlists} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREENS.HOME + 'Tab'}
          component={HomeTabNavigation}
        />
        <Stack.Screen options={{ presentation: 'modal' }} name={SCREENS.PLAYER}>
          {props => <Player {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
