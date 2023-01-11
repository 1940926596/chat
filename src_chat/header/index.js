import "react-native-gesture-handler";
import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { height } from "../global";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnePage from "../MainPage/onePage";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { PanResponder } from "react-native";

const Stack = createNativeStackNavigator();

export default class Header extends Component {
  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      console.log("开始移动：");
    },
    onPanResponderMove: (evt, gs) => {
      console.log("正在移动：X轴：" + gs.dx + "，Y轴：" + gs.dy);
    },
    onPanResponderRelease: (evt, gs) => {
      console.log("结束移动：X轴移动了：" + gs.dx + "，Y轴移动了：" + gs.dy);
      if (gs.dx > 50) {
        console.log("由左向右");
      } else if (gs.dx < -50) {
        console.log("由右向左");
      } else if (gs.dy > 50) {
        console.log("由上向下");
      } else if (gs.dy < -50) {
        console.log("由下向上");
      }
    },
  });

  render() {
    return (
      //   <View {...this._panResponder.panHandlers} style={[{ backgroundColor: "rgb(240,240,240)" }]}>
      //     <View style={[styles.header]}>
      //       <View style={[styles.left]}>
      //         <Text style={[styles.text]}>关注</Text>
      //       </View>
      //       <View style={[styles.middle]}>
      //         <Text style={[styles.text]}>推荐</Text>
      //       </View>
      //       <View style={[styles.right]}>
      //         <Text style={[styles.text]}>热门</Text>
      //       </View>
      //     </View>
      //   </View>

      <View style={[styles.header]}>
        <NavigationContainer>
          {/*<Stack.Navigator*/}
          {/*  initialRouteName="Home"*/}
          {/*  screenOptions={{*/}
          {/*    headerMode: "none",*/}
          {/*    headerTintColor: "white",*/}
          {/*    headerStyle: { backgroundColor: "tomato" },*/}
          {/*  }}*/}
          {/*>*/}
          <Stack.Navigator
            screenOptions={{
              headerMode: "none",
            }}
            // initialRouteName="Profile"
          >
            <Stack.Screen
              name="Home"
              component={MyStack1}
              options={{
                headerMode: "none",
                title: "abc",
                headerRight: () => (
                  <Button title={"hello"}></Button>
                ),

                headerShown:false
              }
            }
            />
            <Stack.Screen name="Notifications" component={MyStack2}
                          options={{
                            headerShown:false
                          }}/>
            <Stack.Screen name="Profile" component={MyStack3}
                          options={{
                            headerShown:false
                          }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}


function MyStack1(prop) {
  return (
    <View>
      <Text>hello</Text>
      <Button title={"跳到新闻页"} onPress={() => prop.navigation.navigate("Notifications")} />
    </View>
  );

}

class MyStack2 extends Component {
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

class MyStack3 extends Component {
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    justifyContent: "center",
    height: height,
    borderBottomLeftRadius: 20,
    borderColor: "red",
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 40, height: 40 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    flexDirection: "row",
  },
  text: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "bold",
  },
  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


});
