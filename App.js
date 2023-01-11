import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Footer from "./src_chat/footer";
import Header from "./src_chat/header";
import Page from "./src_chat/page";

export default class App extends Component {
  render() {
    return (
      <View style={[styles.page]}>
        <Header/>
        {/*<Page />*/}
        {/*<Footer/>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    borderWidth:1,
    borderColor:'blue'
  }
})
