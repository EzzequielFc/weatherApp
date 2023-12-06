import React from "react";
import { View, StyleSheet } from "react-native";

import { IconAtom, TextAtom } from "../../atoms";
import { MapPin, CaretDown } from "phosphor-react-native";

interface Props {
  location: string;
}

export const HeaderLeftMolecule = ({ location }: Props) => (
  <View style={styles.headerLeft}>
    <IconAtom IconComponent={MapPin} size={25} color="#FFF" />
    <TextAtom style={styles.headerLeftText}>{location}</TextAtom>
    <IconAtom IconComponent={CaretDown} size={24} color="#FFF" />
  </View>
);

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerLeftText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
