import React from "react";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";

export default function Links({ selectedLaunchDetail }) {
  return (
    <View style={styles.mainWrapperBox}>
      <Text style={styles.heading}>{`Links`}</Text>
      <Text style={styles.note}>
        * clicks on the below links to get more info.
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text
          onPress={() => {
            Linking.openURL(selectedLaunchDetail.links.article_link);
          }}
          style={styles.link}
        >{`Article`}</Text>
        <Text
          onPress={() => {
            Linking.openURL(selectedLaunchDetail.links.wikipedia);
          }}
          style={styles.link}
        >{`Wikipedia`}</Text>
        <Text
          onPress={() => {
            Linking.openURL(selectedLaunchDetail.links.video_link);
          }}
          style={styles.link}
        >{`Video`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainWrapperBox: {
    flex: 15,
    borderWidth: 1,
    borderRadius: "50%",
    padding: 10,
  },
  note: {
    fontWeight: "400",
    marginTop: 5,
    margin: 30,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 5,
    margin: 30,
    marginBottom: 8,
    textDecorationLine: "underline",
  },

  link: {
    fontSize: 18,
    fontWeight: "500",
    color: "blue",
    borderWidth: 1,
    borderRadius: "8%",
    padding: 5,
  },
  subHeadingValue: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 30,
  },
  type: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: 30,
  },
  description: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
    margin: 15,
    marginLeft: 30,
  },
});
