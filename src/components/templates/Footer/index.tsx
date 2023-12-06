import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ForecastCard } from "../../organisms/ForecastCard";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    gap: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "#FFF",
  },
});
