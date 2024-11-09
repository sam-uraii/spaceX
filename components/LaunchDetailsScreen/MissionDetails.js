import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { connect } from "react-redux";
import { fetchMissionData } from "../../Redux/Middleware/MissionDetailsMiddleware";
import ImageModal from "./ImageModal";
import { primaryTextColor } from "../../Constants/Colors";

const MissionDetails = ({
  selectedLaunchDetail,
  missionData,
  isMissionDataLoading,
  fetchMissionData,
}) => {
  useEffect(() => {
    fetchMissionData();
  }, []);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [didImageLoad, setDidImageLoad] = useState(false);
  const ImageComponent = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setIsImageModalVisible(true);
        }}
      >
        <View style={{ width: "35%", height: "100%" }}>
          {didImageLoad ? (
            <></>
          ) : (
            <ActivityIndicator
              color={primaryTextColor}
              style={{ alignSelf: "center" }}
            />
          )}

          <Image
            source={{
              uri: selectedLaunchDetail.links.mission_patch_small,
            }}
            style={styles.missionImage}
            onLoadEnd={() => {
              setDidImageLoad(true);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const DescriptionComponent = () => {
    return (
      <View style={{ flex: 3 }}>
        <Text style={styles.subHeading}>{`Description`}</Text>

        <ScrollView style={{ height: "50%" }}>
          <Text style={styles.description}>{`${missionData.description}`}</Text>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={styles.mainWrapperBox}>
      {isMissionDataLoading ? (
        <ActivityIndicator color={primaryTextColor} size={15} />
      ) : missionData ? (
        <>
          <Text style={styles.heading}>{`Mission Details`}</Text>
          <View style={styles.detailsWrapper}>
            <ImageComponent />
            <DescriptionComponent />
            <ImageModal
              visible={isImageModalVisible}
              onClose={setIsImageModalVisible}
              uri={selectedLaunchDetail.links.mission_patch}
            />
          </View>
        </>
      ) : (
        <Text style={styles.missingInfo}>Mission info not available.</Text>
      )}
    </View>
  );
};
const mapStateToProps = (state) => ({
  missionData: state.MissionDetailsReducer.missionData,
  isMissionDataLoading: state.MissionDetailsReducer.isMissionDataLoading,
});

export default connect(mapStateToProps, { fetchMissionData })(MissionDetails);
const styles = StyleSheet.create({
  mainWrapperBox: {
    flex: 20,
    borderWidth: 1,
    borderRadius: "50%",
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
  },
  detailsWrapper: { flexDirection: "row", flex: 1 },
  missionImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 2 / 2,
    marginLeft: 10,
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
  },
  subHeadingValue: {
    fontSize: 22,
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
  missingInfo: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
    margin: 15,
    marginLeft: 30,
  },
});
