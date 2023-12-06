import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  temp: string;
}

export function FooterCardPreview({ temp }: Props) {
  return <Text style={styles.footerCardTitle}>{temp}</Text>;
}

const styles = StyleSheet.create({
  footerCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
