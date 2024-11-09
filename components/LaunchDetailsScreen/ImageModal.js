import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";

export default function ImageModal({ visible, onClose, uri }) {
  const HandleOnClose = () => {
    onClose(false);
  };
  const [didImageLoad, setDidImageLoad] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={HandleOnClose}>
      {visible ? (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            width: "100%",
            height: 600,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Ionicons
            name={"close"}
            size={32}
            color="black"
            style={{ alignSelf: "center" }}
            onPress={HandleOnClose}
          />
          {!didImageLoad && (
            <ActivityIndicator
              color={"black"}
              size={"large"}
              style={{ marginTop: "50%" }}
            />
          )}
          <Image
            source={{
              uri,
            }}
            style={{
              width: "50%",
              height: "60%",
              aspectRatio: 2 / 2,
              marginLeft: 10,
            }}
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
