import React from "react";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { dateFormatter } from "../../utils";

export default function Links({ selectedLaunchDetail }) {
  const LinkComp = ({ link, title }) => {
    return (
      <Text
        onPress={() => {
          Linking.openURL(link);
        }}
        style={styles.link}
      >
        {title}
      </Text>
    );
  };
  return (
    <View style={styles.mainWrapperBox}>
      <Text style={styles.heading}>{`Links`}</Text>
      <Text style={styles.note}>
        * clicks on the below links to get more info.
      </Text>
      <View style={styles.linkWrapper}>
        <LinkComp
          link={selectedLaunchDetail.links.article_link}
          title={"Article"}
        />
        <LinkComp
          link={selectedLaunchDetail.links.wikipedia}
          title={"Wikipedia"}
        />
        <LinkComp
          link={selectedLaunchDetail.links.video_link}
          title={"Video"}
        />
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
  linkWrapper: { flexDirection: "row", justifyContent: "space-evenly" },

  link: {
    fontSize: 18,
    fontWeight: "500",
    color: "blue",
    borderWidth: 1,
    borderRadius: "8%",
    padding: 5,
  },
});
