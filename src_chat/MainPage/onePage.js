import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { height, width } from "../global";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class OnePage extends Component {
  render() {
    return (

      <View style={[styles.page]}>
        <View style={[styles.top]}>
          <View style={styles.topLeftPhoto}>
            <Ionicons name="planet-outline" size={30} />
          </View>
          <View style={[styles.topLeftMsg]}>
            <View style={[styles.topLeftMsgClubName, { flexDirection: "row", alignItems: "flex-end" }]}>
              <Text style={[{ fontSize: 18, fontWeight: "normal", marginRight: 8, marginLeft: 3 }]}>aerial吧</Text>
              <Ionicons name="planet-outline" size={15} />
            </View>
            <View
              style={[styles.topLeftMsgClubFollow, { opacity: 0.9, flexDirection: "row", alignItems: "flex-start" }]}>
              <Text style={[{ marginRight: 1 }]}>关注</Text>
              <Text style={[{ marginRight: 7 }]}>10w</Text>
              <Text style={[{ marginRight: 1 }]}>帖子</Text>
              <Text style={[{ marginRight: 3 }]}>10w</Text>
            </View>
          </View>
        </View>
        <View style={[styles.middle]}>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Ionicons name="planet-outline" size={15} />
        </View>
        <View style={[styles.bottom]}>
          <View style={[{ flexDirection: "row" }]}>
            <Ionicons name="share-social-outline" size={15} style={[{ marginRight: 5 }]} />
            <Text>分享</Text>
          </View>
          <View style={[{ flexDirection: "row" }]}>
            <Ionicons name="chatbubbles-outline" size={15} style={[{ marginRight: 5 }]} />
            <Text>5</Text>
          </View>
          <View style={[{ flexDirection: "row" }]}>
            <Ionicons name="heart-outline" size={15} style={[{ marginRight: 5 }]} />
            <Text>5</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "white",
    // borderWidth: 1,
    borderColor: "red",
    // height: height * 0.2,
  },
  top: {
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.08,
    flexDirection: "row",
  },
  topLeftPhoto: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.07,
    width: height * 0.07,
  },
  topLeftMsg: {
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.07,
    width: width - height * 0.07,
  },
  topLeftMsgClubName: {
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.035,
  },
  topLeftMsgClubFollow: {
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.035,
  },
  middle: {},
  bottom: {
    // borderWidth: 1,
    borderColor: "red",
    height: height * 0.025,
    flexDirection: "row",
    justifyContent: "space-around",
  },


});
