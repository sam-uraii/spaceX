import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { updateSelectedLaunchDetail } from "../../../Redux/Action/LaunchDataAction";
import ListItem from "./ListItem";
const LaunchDataList = ({
  launchData,
  isLaunchDataLoading,
  fetchLaunchData,
  updateSelectedLaunchDetail,
}) => {
  const keyExtractor = useCallback(
    (item, index) => `${item.flight_number}`,
    []
  );
  const ItemSeparator = (
    <View style={{ height: 3, backgroundColor: "rgba(255,255,255,.5)" }}></View>
  );
  return (
    <View style={styles.box}>
      <FlatList
        data={launchData}
        renderItem={({ item, index }) => {
          return <ListItem item={item} />;
        }}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}
        refreshing={isLaunchDataLoading}
        onRefresh={fetchLaunchData}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  launchData: state.LaunchDataReducer.launchData,
  isLaunchDataLoading: state.LaunchDataReducer.isLaunchDataLoading,
});

export default connect(mapStateToProps, {
  updateSelectedLaunchDetail,
})(LaunchDataList);
