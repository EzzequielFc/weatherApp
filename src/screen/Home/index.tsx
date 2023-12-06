import { LinearGradient } from "expo-linear-gradient";
import { MapPin, CaretDown, BellRinging } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Sun from "../../assets/01d.svg";
import Sun02D from "../../assets/02d.svg";

export function Home() {
  return (
    <LinearGradient
      colors={["#292A4E", "#715C77", "#C75C2E"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin size={25} color="#FFF" />
            <Text style={styles.headerLeftText}>São Gonçalo do Pará</Text>
            <CaretDown size={24} color="#FFF" />
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTextUser}>Bom dia, Ezequiel</Text>
          <Sun width={200} height={200} />
          <Text style={styles.infoTextClima}>32ºC</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 31º Min.: 17º</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Previsão para os próximos 7 dias
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.footerCard}>
              <Text style={styles.footerCardTitle}>Seg</Text>
              <Sun02D width={40} height={40} />
              <Text style={styles.footerCardPreview}>15ºC</Text>
            </View>
            <View style={styles.footerCard}>
              <Text style={styles.footerCardTitle}>Seg</Text>
              <Sun02D width={40} height={40} />
              <Text style={styles.footerCardPreview}>15ºC</Text>
            </View>
            <View style={styles.footerCard}>
              <Text style={styles.footerCardTitle}>Seg</Text>
              <Sun02D width={40} height={40} />
              <Text style={styles.footerCardPreview}>15ºC</Text>
            </View>
            <View style={styles.footerCard}>
              <Text style={styles.footerCardTitle}>Seg</Text>
              <Sun02D width={40} height={40} />
              <Text style={styles.footerCardPreview}>15ºC</Text>
            </View>
            <View style={styles.footerCard}>
              <Text style={styles.footerCardTitle}>Seg</Text>
              <Sun02D width={40} height={40} />
              <Text style={styles.footerCardPreview}>15ºC</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

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
