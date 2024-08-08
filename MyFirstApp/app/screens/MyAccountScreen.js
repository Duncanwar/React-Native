import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";

function MyAccountScreen({ title, subTitle, image }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.userContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        <View>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color={colors.primary}
            size={20}
          />
          <AppText style={styles.title}>My Listings</AppText>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.light,
    marginVertical: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "100",
    color: "grey",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
});
export default MyAccountScreen;
