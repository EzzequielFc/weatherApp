import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Sun02D from "../../../assets/02d.svg";

import { TextAtom } from "../../atoms";

export interface IForecast {
  day: string;
  temp: string;
  icon?: string;
}

interface Props {
  forecast: IForecast[];
}

export const FooterOrganism = ({ forecast }: Props) => (
  <View style={styles.footer}>
    <TextAtom style={styles.footerText}>
      Previsão para os próximos {forecast.length} dias
    </TextAtom>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {forecast.map((day, index) => (
        <View key={index} style={styles.footerCard}>
          <TextAtom style={styles.footerCardTitle}>{day.day}</TextAtom>
          <Sun02D width={40} height={40} />
          <TextAtom style={styles.footerCardPreview}>{day.temp}ºC</TextAtom>
        </View>
      ))}
    </ScrollView>
  </View>
);

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
  footerCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  footerCardPreview: {
    fontSize: 24,
    fontWeight: "300",
    color: "#FFF",
  },
});
