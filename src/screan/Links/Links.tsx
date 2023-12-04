import React from "react";
import {Button, Linking, ScrollView, View} from "react-native";
import {Text} from "react-native-paper";

function Links() {
    return (
        <ScrollView style={{paddingHorizontal: 8}}>
            <Text style={{ paddingTop: 35, fontSize: 47}}
                  variant="titleMedium">Departament links</Text>
            <View style={{display: "flex", gap: 20, paddingVertical: 20}}>
                <Button title={"chdtu"} onPress={() => Linking.openURL("https://chdtu.edu.ua/")}/>
                <Button title={"pzas"} onPress={() => Linking.openURL("https://pzas.chdtu.edu.ua/")}/>
            </View>
        </ScrollView>
    );
}

export default Links;
