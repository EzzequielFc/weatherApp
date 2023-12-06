import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

export function FooterCardTitle({ title }: Props) {
  return <Text style={styles.footerCardTitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  footerCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
