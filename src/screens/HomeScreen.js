import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const verificacao = async () => {
    try {
      await AsyncStorage.removeItem("login"); // Remove o item de login
      console.log("Deslogado!!");
      navigation.navigate("Login");
    } catch (err) {
      console.log("Erro no Logout: ", err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={() => {
            verificacao();
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dce2e5",
  },
  title: {
    fontSize: 24,
    marginBottom: 90,
  },
  buttonContainer: {
    backgroundColor: "#154c79",
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
});
