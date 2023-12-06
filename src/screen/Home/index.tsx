import { HomeTemplate } from "../../components/templates/HomeTemplate";

const forecast = [
  { day: "Seg", temp: "15", icon: "02d" },
  { day: "Ter", temp: "16", icon: "02d" },
  { day: "Qua", temp: "17", icon: "02d" },
  { day: "Qui", temp: "18", icon: "02d" },
  { day: "Sex", temp: "19", icon: "02d" },
  { day: "Sab", temp: "20", icon: "02d" },
  { day: "Dom", temp: "21", icon: "02d" },
];

export function Home() {
  return (
    <HomeTemplate
      location="São Gonçalo do Pará"
      user="Ezequiel"
      weather="32ºC"
      max="31º"
      min="17º"
      forecast={forecast}
    />
  );
}
