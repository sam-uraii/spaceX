import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { dateFormatter } from "../../utils";
import { fetchFullLaunchDetails } from "../../Redux/Middleware/LaunchDataMiddleWare";
import { connect } from "react-redux";

const LaunchDetails = ({
  fetchFullLaunchDetails,
  fullLaunchDetailsOfSelectedLaunch,
  areFullLaunchDetailsLoading,
}) => {
  useEffect(() => {
    fetchFullLaunchDetails();
  }, []);
  const details = (subHeading, value) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.subHeading}>{`${subHeading}`}</Text>
        <Text style={styles.subHeadingValue}>{`${value}`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainWrapperBox}>
      {areFullLaunchDetailsLoading ? (
        <ActivityIndicator color={"black"} size={15} />
      ) : fullLaunchDetailsOfSelectedLaunch ? (
        <>
          <Text style={styles.heading}>{`Launch Details`}</Text>

          {details(
            `Status`,
            `${fullLaunchDetailsOfSelectedLaunch.launch_success ? "Success" : "Failed"}`
          )}
          {details(
            `Reason`,
            `${fullLaunchDetailsOfSelectedLaunch.launch_success ? "It was a success" : fullLaunchDetailsOfSelectedLaunch.launch_failure_details.reason}`
          )}
          {details(
            `Site`,
            `${fullLaunchDetailsOfSelectedLaunch.launch_site.site_name}`
          )}
          {details(
            `Window`,
            `${fullLaunchDetailsOfSelectedLaunch.launch_window}`
          )}
        </>
      ) : (
        <Text style={styles.missingInfo}>Launch info not available.</Text>
      )}
    </View>
  );
};
const mapStateToProps = (state) => ({
  fullLaunchDetailsOfSelectedLaunch:
    state.LaunchDataReducer.fullLaunchDetailsOfSelectedLaunch,
  areFullLaunchDetailsLoading:
    state.LaunchDataReducer.areFullLaunchDetailsLoading,
});

export default connect(mapStateToProps, { fetchFullLaunchDetails })(
  LaunchDetails
);
const styles = StyleSheet.create({
  mainWrapperBox: {
    flex: 20,
    borderWidth: 1,
    borderRadius: "50%",
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 5,
    margin: 30,
    marginBottom: 8,
    textDecorationLine: "underline",
  },

  subHeading: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 0,
    margin: 30,
    marginBottom: 0,
    width: "20%",
  },
  subHeadingValue: {
    fontSize: 21,
    fontWeight: "600",
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
