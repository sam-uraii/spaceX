import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { updateSelectedLaunchDetail } from "../../../Redux/Action/LaunchDataAction";
import ListItem from "./ListItem";
const LaunchDataList = ({
  launchData,
  isLaunchDataLoading,
  fetchLaunchData,
}) => {
  const keyExtractor = useCallback((item, index) => `${index}`, []);
  const ItemSeparator = <View style={styles.itemSeparator}></View>;
  const getItemLayout = useCallback(
    (data, index) => ({
      length: 150,
      offset: 150 * index,
      index,
    }),
    []
  );
  const renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };
  return (
    <View style={styles.box}>
      <FlatList
        data={launchData}
        renderItem={renderItem}
        refreshing={isLaunchDataLoading}
        onRefresh={fetchLaunchData}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        getItemLayout={getItemLayout}
        windowSize={1}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
  },
  itemSeparator: { height: 3, backgroundColor: "rgba(255,255,255,.5)" },
});

const mapStateToProps = (state) => ({
  launchData: state.LaunchDataReducer.launchData,
  isLaunchDataLoading: state.LaunchDataReducer.isLaunchDataLoading,
  bookmarkedLaunches: state.BookmarkReducer.bookmarkedLaunches,
});

export default connect(mapStateToProps, {
  updateSelectedLaunchDetail,
})(LaunchDataList);
