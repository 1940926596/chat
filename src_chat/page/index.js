// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// import Ionicons from "react-native-vector-icons/Ionicons";
//
// export default class Page extends Component {
//   render() {
//     return (
//       <View style={[styles.page]}>
//         <Text> textInComponent </Text>
//         <Ionicons name='rocket' color={'red'} />
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   page:{
//     height:height*0.81,
//     borderColor:'green',
//     borderWidth:1
//   }
// })
import React from "react";
import { Animated, Easing, View, StyleSheet, ScrollView, RefreshControl, Alert } from "react-native";
import LottieView from "lottie-react-native";
import { height } from "../global";
import OnePage from "../MainPage/onePage";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      isRefreshing: false,
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }

  onRefresh() {
    //先修改刷新状态为true
    this.setState({isRefreshing: true});
    console.log("开始新的刷新方法");
    setTimeout(() => {
      //你的刷新逻辑
      //逻辑执行完之后，修改刷新状态为false
      this.setState({isRefreshing: false});
    }, 2000);
  }

  render() {
    return (
      <ScrollView
        style={[styles.page]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
            colors={['#0000ff', '#ff0000', '#00ff00']}
            title={this.state.isRefreshing ? "刷新中...." : "下拉刷新"}
          />}
      >
        {/*<LottieView source={require("../img/json/PinJump.json")} progress={this.state.progress} />*/}
        <OnePage />
        <OnePage />
        <OnePage />
        <OnePage />
        <OnePage />
        <OnePage />
        <OnePage />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "rgb(240,240,240)",
    height: height * 0.85,
    // borderColor: 'green',
    // borderWidth: 1
  },
});
