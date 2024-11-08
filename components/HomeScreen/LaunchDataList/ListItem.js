import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { dateFormatter } from "../../../utils";
import { connect } from "react-redux";
import { updateSelectedLaunchDetail } from "../../../Redux/Action/LaunchDataAction";
import { updateBookmarkedLaunches } from "../../../Redux/Action/BookmarkAction";
const ListItem = ({
  item,
  updateSelectedLaunchDetail,
  bookmarkedLaunches,
  updateBookmarkedLaunches,
}) => {
  console.log(bookmarkedLaunches, item.flight_number);

  return (
    <Link href="/LaunchDetailsScreen" asChild>
      <TouchableWithoutFeedback
        onPress={() => {
          updateSelectedLaunchDetail(item);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 20,
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: item.links.mission_patch,
              }}
              style={styles.missionImage}
            />
          </View>
          <View style={styles.itemWrapper}>
            <View>
              <Text style={styles.title}>{`${item.mission_name}`}</Text>
              <Text
                style={styles.subText}
              >{`${item.launch_site.site_name},  ${dateFormatter(item.launch_date_unix)}`}</Text>
              <Text
                style={{ ...styles.subText, marginTop: 8 }}
              >{`Status - ${item.launch_success ? "Success" : "Failed"}`}</Text>
              <Text
                style={styles.subText}
              >{`${"Rocket Name"} - ${item.rocket.rocket_name}`}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 15,
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={
                bookmarkedLaunches.hasOwnProperty(item.flight_number)
                  ? "heart"
                  : "heart-outline"
              }
              size={32}
              color="black"
              style={{ alignSelf: "center" }}
              onPress={() => {
                let key = item.flight_number;
                let newBookmarkedLaunches = { ...bookmarkedLaunches };
                if (newBookmarkedLaunches.hasOwnProperty(item.flight_number)) {
                  delete newBookmarkedLaunches[key];
                } else {
                  newBookmarkedLaunches[key] = "";
                }
                updateBookmarkedLaunches(newBookmarkedLaunches);
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  bookmarkedLaunches: state.BookmarkReducer.bookmarkedLaunches,
});

export default connect(mapStateToProps, {
  updateSelectedLaunchDetail,
  updateBookmarkedLaunches,
})(ListItem);

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
  itemWrapper: {
    padding: 10,
    flex: 65,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    flex: 2,
  },
  subText: {
    fontSize: 16,
    fontWeight: "300",
    flex: 1,
  },
  missionImage: {
    width: 50,
    height: 50,
    aspectRatio: 2 / 2,
    objectFit: "cover",
    alignSelf: "center",
  },
});
