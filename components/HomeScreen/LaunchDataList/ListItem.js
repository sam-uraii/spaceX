import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
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
import { getBookmarkedLaunches } from "../../../Redux/ExternalGlobalStateProvider";
import { primaryTextColor } from "../../../Constants/Colors";
import { HEART, HEART_OUTLINE } from "../../../Constants/IconConstants";
import { LAUNCH_DETAILS_SCREEN } from "../../../Constants/ScreensConstant";
const ListItem = React.memo(
  ({
    item,
    updateSelectedLaunchDetail,
    bookmarkedLaunches,
    updateBookmarkedLaunches,
  }) => {
    const [didImageLoad, setDidImageLoad] = useState(false);
    const handleTapOnList = () => updateSelectedLaunchDetail(item);

    const Avatar = () => {
      const handleImageOnLoad = () => setDidImageLoad(true);
      return (
        <View style={styles.missionImageWrapper}>
          {didImageLoad ? (
            <></>
          ) : (
            <ActivityIndicator color={primaryTextColor} />
          )}
          <Image
            source={{ uri: item.links.mission_patch_small }}
            style={styles.missionImage}
            onLoad={handleImageOnLoad}
          />
        </View>
      );
    };
    const Details = () => {
      return (
        <View style={styles.detailsWrapper}>
          <View>
            <Text style={styles.title}>{item.mission_name}</Text>
            <Text style={styles.subText}>
              {`${item.launch_site.site_name}, ${dateFormatter(item.launch_date_unix)}`}
            </Text>
            <Text style={[styles.subText, { marginTop: 8 }]}>
              {`Status - ${item.launch_success ? "Success" : "Failed"}`}
            </Text>
            <Text style={styles.subText}>
              {`Rocket Name - ${item.rocket.rocket_name}`}
            </Text>
          </View>
        </View>
      );
    };
    const BookmarkIcon = () => {
      const handleBookmark = () => {
        let key = item.flight_number;
        const bookmark = getBookmarkedLaunches();
        let newBookmarkedLaunches = { ...bookmark };
        if (newBookmarkedLaunches.hasOwnProperty(item.flight_number)) {
          delete newBookmarkedLaunches[key];
        } else {
          newBookmarkedLaunches[key] = key;
        }
        updateBookmarkedLaunches(newBookmarkedLaunches);
      };
      return (
        <TouchableWithoutFeedback onPress={handleBookmark}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name={
                bookmarkedLaunches.hasOwnProperty(item.flight_number)
                  ? HEART
                  : HEART_OUTLINE
              }
              size={32}
              color={primaryTextColor}
              style={styles.icon}
            />
          </View>
        </TouchableWithoutFeedback>
      );
    };
    return (
      <Link href={LAUNCH_DETAILS_SCREEN} asChild>
        <TouchableWithoutFeedback onPress={handleTapOnList}>
          <View style={styles.itemWrapper}>
            <Avatar />
            <Details />
            <BookmarkIcon />
          </View>
        </TouchableWithoutFeedback>
      </Link>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.bookmarkedLaunches[prevProps.item.flight_number] ===
      nextProps.bookmarkedLaunches[nextProps.item.flight_number]
    );
  }
);

const mapStateToProps = (state) => ({
  bookmarkedLaunches: state.BookmarkReducer.bookmarkedLaunches,
});

export default connect(mapStateToProps, {
  updateSelectedLaunchDetail,
  updateBookmarkedLaunches,
})(ListItem);

const styles = StyleSheet.create({
  detailsWrapper: {
    padding: 10,
    flex: 65,
  },
  itemWrapper: { flexDirection: "row", height: 150 },
  title: {
    fontSize: 22,
    fontWeight: "900",
    fontFamily: "SpaceMono-Regular",
  },
  subText: {
    fontSize: 16,
    fontWeight: "300",
  },
  iconWrapper: { flex: 15, justifyContent: "center" },
  missionImageWrapper: { flex: 20, justifyContent: "center" },
  missionImage: {
    width: 50,
    height: 50,
    aspectRatio: 2 / 2,
    objectFit: "cover",
    alignSelf: "center",
  },
  icon: { alignSelf: "center" },
});
