import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { height, width } from "../global";
import { BoxShadow } from "react-native-shadow";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Footer extends Component {
  componentDidMount() {
    console.log(height);
  }


  render() {
    return (
      <View style={[{ backgroundColor: "rgb(240,240,240)" }]}>
        <View style={[styles.footer]}>
          <View style={[styles.left]}>
            <View style={[styles.leftTop]}>
              <View style={[styles.leftTopLeft]}>
                <Ionicons name="home-outline" size={20} />
              </View>
              <View style={[styles.leftTopRight]}>
                <Ionicons name="planet-outline" size={20} />
              </View>
            </View>
            <View style={[styles.leftBottom]}>
              <View style={[styles.leftBottomLeft]}>
                <Text style={[styles.font1]}>首页</Text>
              </View>
              <View style={[styles.leftBottomRight]}>
                <Text style={[styles.font1]}>进吧</Text>
              </View>
            </View>
          </View>
          <View style={[styles.middle]}>
            <Ionicons name="add-circle" size={40} color={"rgb(119,93,255)"} />
          </View>
          <View style={[styles.right]}>
            <View style={[styles.rightTop]}>
              <View style={[styles.rightTopLeft]}>
                <Ionicons name="timer-outline" size={20} />
              </View>
              <View style={[styles.rightTopRight]}>
                <Ionicons name="person-outline" size={20} />
              </View>
            </View>
            <View style={[styles.rightBottom]}>
              <View style={[styles.rightBottomLeft]}>
                <Text style={[styles.font1]}>消息</Text>
              </View>
              <View style={[styles.rightBottomRight]}>
                <Text style={[styles.font1]}>我的</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    height: height * 0.08,
    borderTopLeftRadius: 20,
    borderColor: "red",
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    // marginTop:10,
    flexDirection: "row",
    backgroundColor:'white'
  },
  left: {
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.08,
  },
  middle: {
    marginTop: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.2,
    height: height * 0.08,
  },
  right: {
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.08,
  },
  leftTop: {
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.045,
  },
  leftBottom: {
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.035,
  },
  leftTopLeft: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.045,
  },
  leftTopRight: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.045,
  },
  leftBottomLeft: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.035,
  },
  leftBottomRight: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.035,
  },
  rightTop: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.045,
  },
  rightBottom: {
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 1,
    width: width * 0.35,
    height: height * 0.035,
  },
  rightTopLeft: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.045,
  },
  rightTopRight: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.045,
  },
  rightBottomLeft: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.035,
  },
  rightBottomRight: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "green",
    // borderWidth: 1,
    width: width * 0.175,
    height: height * 0.035,
    fontWeight: "bold",
  },
  font1: {
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
});
