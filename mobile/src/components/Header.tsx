import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string,
  showCancelButton?: boolean,
}

function Header({title, showCancelButton = true}: HeaderProps) {
  const navigation = useNavigation();

  function handleGoToHomepage() {
    navigation.navigate("OrphanagesMap")
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
         <Feather name="arrow-left" size={24} color="#15b6d6"></Feather>
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      { showCancelButton ? 
        (
          <BorderlessButton onPress={handleGoToHomepage}>
            <Feather name="x" size={24} color="#ff669d"></Feather>
          </BorderlessButton>
        ) 
        : 
        (
          <View />
        ) 
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: "#f9fafc",
    borderColor: "#dde3f0",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#8fa7b3",
    fontSize: 18,
  }
})

export default Header
