import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { dateFormatter } from "../../utils";
import { fetchRocketData } from "../../Redux/Middleware/RocketDetailsMiddleware";
import { connect } from "react-redux";

const RocketDetails = ({
  fetchRocketData,
  rocketData,
  isRocketDataLoading,
}) => {
  useEffect(() => {
    fetchRocketData();
  }, []);

  const details = (subHeading, value) => {
    return (
      <View>
        <Text style={styles.subHeading}>{`${subHeading}`}</Text>
        <Text style={styles.subHeadingValue}>{`${value}`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainWrapperBox}>
      {isRocketDataLoading ? (
        <ActivityIndicator color={"black"} size={15} />
      ) : rocketData ? (
        <>
          <Text style={styles.heading}>{`Rocket Details`}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
              paddingRight: 5,
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(0,0,0,0.5)",
            }}
          >
            {details(`Name`, `${rocketData.rocket_name}`)}
            {details(`Type`, `${rocketData.rocket_type}`)}
          </View>
          <Text style={styles.subHeading}>{`Description`}</Text>
          <ScrollView style={{}}>
            <Text
              style={styles.description}
            >{`${rocketData.description}`}</Text>
          </ScrollView>
        </>
      ) : (
        <Text>Launch info not available.</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  rocketData: state.RocketDetailsReducer.rocketData,
  isRocketDataLoading: state.RocketDetailsReducer.isRocketDataLoading,
});

export default connect(mapStateToProps, { fetchRocketData })(RocketDetails);
const styles = StyleSheet.create({
  mainWrapperBox: {
    flex: 30,
    borderWidth: 1,
    borderRadius: "50%",
    paddingBottom: 5,
    marginBottom: 5,
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
    margin: 30,
    marginBottom: 10,
    textDecorationLine: "underline",
  },

  subHeading: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 0,
    margin: 30,
    marginBottom: 0,
  },
  subHeadingValue: {
    fontSize: 30,
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
