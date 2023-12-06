import { HomeTemplate } from "../../components/templates/HomeTemplate";

const forecast = [
  { day: "Seg", temp: "28", icon: "02d" },
  { day: "Ter", temp: "34", icon: "02d" },
  { day: "Qua", temp: "35", icon: "02d" },
  { day: "Qui", temp: "33", icon: "02d" },
  { day: "Sex", temp: "32", icon: "02d" },
  { day: "Sab", temp: "30", icon: "02d" },
  { day: "Dom", temp: "21", icon: "02d" },
];

export function Home() {
  return (
    <HomeTemplate
      location="São Gonçalo do Pará"
      user="Ezequiel"
      weather="28ºC"
      max="32º"
      min="21º"
      forecast={forecast}
    />
  );
}
