import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/LaunchDetailsScreen/Header";
import RocketDetails from "../Components/LaunchDetailsScreen/RocketDetails";
import LaunchDetails from "../Components/LaunchDetailsScreen/LaunchDetails";
import MissionDetails from "../Components/LaunchDetailsScreen/MissionDetails";
import Links from "../Components/LaunchDetailsScreen/Links";
const LaunchDetailsScreen = ({ selectedLaunchDetail }) => {
  return (
    <View style={styles.mainWrapperBox}>
      <Header selectedLaunchDetail={selectedLaunchDetail} />
      <RocketDetails selectedLaunchDetail={selectedLaunchDetail} />
      <LaunchDetails selectedLaunchDetail={selectedLaunchDetail} />
      <MissionDetails selectedLaunchDetail={selectedLaunchDetail} />
      <Links selectedLaunchDetail={selectedLaunchDetail} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedLaunchDetail: state.LaunchDataReducer.selectedLaunchDetail,
});

export default connect(mapStateToProps, null)(LaunchDetailsScreen);

const styles = StyleSheet.create({
  mainWrapperBox: { flex: 1, padding: 10 },
});
