import React, { useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { connect } from "react-redux";

import { Link } from "expo-router";
import { updateSelectedLaunchDetail } from "../Redux/Action/LaunchDataAction";

const LaunchDataList = ({
  launchData,
  isLaunchDataLoading,
  fetchLaunchData,
  updateSelectedLaunchDetail,
}) => {
  const CreateListItem = (item) => {
    return (
      <Link href="/LaunchDetailsScreen" asChild>
        <TouchableWithoutFeedback
          onPress={() => {
            updateSelectedLaunchDetail(item);
          }}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{`${item.mission_name}`}</ListItem.Title>
              <ListItem.Subtitle>{`${item.launch_success ? "Success" : "Failed"}, ${item.launch_site.site_name}`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableWithoutFeedback>
      </Link>
    );
  };
  const keyExtractor = useCallback((item, index) => `${index}`, []);
  return (
    <View style={styles.box}>
      <FlatList
        data={launchData}
        renderItem={({ item, index }) => {
          return CreateListItem(item);
        }}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}
        refreshing={isLaunchDataLoading}
        onRefresh={fetchLaunchData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
});

const mapStateToProps = (state) => ({
  launchData: state.LaunchDataReducer.launchData,
  isLaunchDataLoading: state.LaunchDataReducer.isLaunchDataLoading,
});

export default connect(mapStateToProps, {
  updateSelectedLaunchDetail,
})(LaunchDataList);
