import React from "react";
import { View, StyleSheet } from "react-native";

import Sun from "../../../assets/01d.svg";

import { ImageAtom, TextAtom } from "../../atoms";

interface Props {
  user: string;
  weather: string;
  max: string;
  min: string;
}

export const InfoMolecule = ({ user, weather, max, min }: Props) => (
  <View style={styles.info}>
    <TextAtom style={styles.infoTextUser}>Olá, {user}</TextAtom>
    <Sun width={200} height={200} />
    <TextAtom style={styles.infoTextClima}>{weather}</TextAtom>
    <TextAtom style={styles.infoTextMaxMin}>
      Max.: {max} Min.: {min}
    </TextAtom>
  </View>
);

const styles = StyleSheet.create({
  info: {
    paddingVertical: 72,
    alignItems: "center",
    gap: 10,
  },
  infoTextUser: {
    fontSize: 32,
    fontWeight: "300",
    color: "#FFF",
  },
  infoTextClima: {
    fontSize: 100,
    fontWeight: "300",
    color: "#FFF",
  },
  infoTextMaxMin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
