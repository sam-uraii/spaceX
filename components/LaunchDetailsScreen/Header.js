import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";

export default function Header({ selectedLaunchDetail }) {
  return (
    <View style={styles.mainWrapperBox}>
      <ScrollView horizontal>
        <Text style={styles.name}>{selectedLaunchDetail.mission_name}</Text>
      </ScrollView>
      <Text style={styles.date}>
        {dateFormatter(selectedLaunchDetail.launch_date_unix)}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainWrapperBox: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
  },
  date: {
    fontSize: 25,
    fontWeight: "700",
  },
});
