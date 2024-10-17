import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../home/home";
import Calendario from "../calendar/calendario";
import Profile from "../profile/profile";
import Icon from "../../constants/Icon";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
    return <NavigationContainer>

        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={Icon.GoldenHome} />
                },
                tabBarIcon: ({focused}) =>{
                    return <Image source={Icon.home} style={
                        {
                            width: 25, 
                            height:25,
                            opacity: focused ? 1 : 0.5
                        }
                    
                    
                    }/>
                }
            }}/>
           
           
            <Tab.Screen name="Calendario" component={Calendario} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={Icon.GoldenHome} />
                },
                tabBarIcon: ({focused}) =>{
                    return <Image source={Icon.calendar} style={
                        {
                        width: 25, 
                        height:25,
                        opacity: focused ? 1 : 0.5
                    }
                }/>
                }
            }}/>
           
           
            <Tab.Screen name="Perfil" component={Profile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={Icon.GoldenHome} />
                },
                tabBarIcon: ({focused}) =>{
                    return <Image source={Icon.profile} style={
                        {
                        width: 25, 
                        height:25,
                        opacity: focused ? 1 : 0.5
                    }
                }/>
                }
            }}/>


        </Tab.Navigator>

    </NavigationContainer>
}