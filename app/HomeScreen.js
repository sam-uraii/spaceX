import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import LaunchDataList from "../Components/HomeScreen/LaunchDataList/LaunchDataList";
import { connect } from "react-redux";
import { fetchLaunchData } from "../Redux/Middleware/LaunchDataMiddleWare";

const Home = ({ fetchLaunchData }) => {
  useEffect(() => {
    fetchLaunchData();
  }, []);

  return (
    <View style={styles.mainWrapperBox}>
      <LaunchDataList fetchLaunchData={fetchLaunchData} />
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  fetchLaunchData,
})(Home);

const styles = StyleSheet.create({
  mainWrapperBox: {
    backgroundColor: "#E3E3EE",
    flex: 1,
  },
});
