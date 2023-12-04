import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

function AboutMe() {
  return (
      <ScrollView style={{ paddingHorizontal: 8 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ paddingTop: 20,fontSize:30, textAlign: "center", textAlignVertical: "center" }} variant="titleMedium">
                  Veretilnyk Vitalii</Text>
              <Image style={{ borderRadius:15, width: 350, height: 500 }}
                     source={require("./../../img/avatar.png")} />
              <Text style={{ paddingBottom: 10 }}
                  variant="titleMedium">
                  Some days, some nights{'\n'}
                  Some live, some die{'\n'}
                  In the way of the samurai{'\n'}
                  Some fight, some bleed{'\n'}
                  Sun up to sun down{'\n'}
                  The sons of a battlecry{'\n'}
                  Some days, some nights{'\n'}
                  Some live, some die{'\n'}
                  In the name of the samurai{'\n'}
                  Some fight, some bleed{'\n'}
                  Sun up to sun down{'\n'}
                  The sons of a battlecry, battlecry
              </Text>
          </View>
      </ScrollView>
  );
}

export default AboutMe;
