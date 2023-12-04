import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screan/Chat/Chat";
import AboutDepartment from "../screan/AboutDepartment";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigation from "./BottomNavigation";
import LastNews from "../screan/LastNews/LastNews";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Chat">
                <Drawer.Screen name="Chat" options={{ title: "Chat" }} component={Chat} />
                <Drawer.Screen name="AboutDepartment" options={{ title: "About the Department" }} component={AboutDepartment} />
                <Drawer.Screen name="LastNews" options={{ title: "Latest News" }} component={LastNews} />
                <Drawer.Screen name="Other" options={{ title: "About Me" }}>

                    {
                        props => <BottomNavigation />
                    }
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
