import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { primaryTextColor } from "../../Constants/Colors";
import { CLOSE } from "../../Constants/IconConstants";
export default function ImageModal({ visible, onClose, uri }) {
  const HandleOnClose = () => {
    onClose(false);
  };
  const [didImageLoad, setDidImageLoad] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={HandleOnClose}>
      {visible ? (
        <View style={styles.mainWrapperBox}>
          <Ionicons
            name={CLOSE}
            size={32}
            color={primaryTextColor}
            style={{ alignSelf: "center" }}
            onPress={HandleOnClose}
          />
          {!didImageLoad && (
            <ActivityIndicator
              color={primaryTextColor}
              size={"large"}
              style={styles.icon}
            />
          )}
          <Image
            source={{
              uri,
            }}
            style={styles.image}
            onLoadEnd={() => {
              setDidImageLoad(true);
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  mainWrapperBox: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: 600,
    position: "absolute",
    bottom: 0,
  },
  icon: { marginTop: "50%" },
  image: {
    width: "50%",
    height: "60%",
    aspectRatio: 2 / 2,
    marginLeft: 10,
  },
});
