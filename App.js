import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Profile from './Screens/Profile';
import RepairScreen from './Screens/RepairScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Home() {
    return (
      <NavigationContainer independent={true}>
          <Tabs.Navigator initialRouteName='Home'>
              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
               name='Home' component={HomeScreen}
               />

              <Tabs.Screen  options={{
                headerShown:false, 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={color} />
                ),
              }} 
              name='Cart' component={CartScreen}/>

              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="man" size={size} color={color} />
                ),
              }} 
              name='Profile' component={Profile}/>

              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="laptop" size={size} color={color} />
                ),
              }} 
              name='Repairs' component={RepairScreen}/>
          </Tabs.Navigator>
      </NavigationContainer>
    );
  }

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
             options={{headerShown:false}}
            name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen 
            options={{headerShown:false}}
            name='HomeComponent' component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}