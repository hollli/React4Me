import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";

function AboutDepartment() {
  return (
      <ScrollView style={{
        paddingHorizontal: 16,
        marginVertical: 30
      }}>
        <Text  style={{ marginBottom: 16 }}variant="headlineLarge">Department "Software of automated systems"</Text>
        <Text variant="headlineSmall">
          The "Software support of automated systems" department was created in 1998 as a result of the reorganization of
          the "Computer Engineering" department and the organization of the FITIS faculty to which it belongs. The
          department is a graduation from specialty 121 – "Software engineering".</Text>
        <Text variant="headlineSmall">Software engineering is a discipline that relates to all aspects of manufacturing
          software from the initial stages of specification creation to system support after commissioning.
          An education in software engineering is a smart investment in your future. You will not just learn from us
          to program (code), and create software products - analyze requirements, work in teams of developers, test
          and ensure product quality, manage software projects. Managers and specialists of IT companies work at our
          department, who are happy to share their knowledge and
          experience with students. Students departments undergo production practices in IT companies from the 1st to the
          5th courses, which gives them
          advantages in practical experience
          and simplifies further employment.</Text>
      </ScrollView>
  );
}

export default AboutDepartment;
