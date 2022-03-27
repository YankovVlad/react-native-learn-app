import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Navbar = ({title}) => {


  return (
    <View style={styles.navbar}>
      <Text style={styles.navbar__text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    width: '100%',
    paddingHorizontal: 40,
    paddingBottom: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navbar__text: {
    color: '#fff',
    fontSize: 20,
  }
})