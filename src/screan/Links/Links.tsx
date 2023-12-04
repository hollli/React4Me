import React from "react";
import { Button, Linking, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

function Links() {
  return (
    <ScrollView style={{ paddingHorizontal: 8 }}>
      <Text variant="displaySmall">Силки на кафедри</Text>
      <View style={{ display: "flex", gap: 20, paddingVertical: 20 }}>
        <Button title={"Посилання на університет"} onPress={() => Linking.openURL("https://chdtu.edu.ua/")} />
        <Button title={"Посилання на кафедру"} onPress={() => Linking.openURL("https://pzas.chdtu.edu.ua/")} />
      </View>
    </ScrollView>
  );
}

export default Links;
