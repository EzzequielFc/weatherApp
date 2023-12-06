import React from "react";
import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { HeaderLeftMolecule } from "../../molecules/HeaderLeftMolecule";
import { InfoMolecule } from "../../molecules/InfoMolecule";
import { FooterOrganism, IForecast } from "../../organisms/FooterOrganism";

interface Props {
  location: string;
  user: string;
  weather: string;
  forecast: IForecast[];
  max: string;
  min: string;
}

export const HomeTemplate = ({
  location,
  user,
  weather,
  forecast,
  max,
  min,
}: Props) => (
  <LinearGradient
    colors={["#292A4E", "#715C77", "#C75C2E"]}
    style={styles.container}
  >
    <View style={styles.content}>
      <View style={styles.header}>
        <HeaderLeftMolecule location={location} />
      </View>
      <InfoMolecule user={user} weather={weather} max={max} min={min} />
      <FooterOrganism forecast={forecast} />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 64,
    paddingHorizontal: 36,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
