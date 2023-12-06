import React from "react";
import { View, StyleSheet } from "react-native";

export function FooterCard({ children }) {
  return <View style={styles.footerCard}>{children}</View>;
}

const styles = StyleSheet.create({
  footerCard: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255,255,255,0.23)",
    borderRadius: 8,
    marginRight: 14,
  },
});
