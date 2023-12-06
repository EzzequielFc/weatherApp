import React from "react";

import Sun02D from "../../../assets/02d.svg";

import { FooterCard } from "../../atoms/FooterCard";
import { FooterCardTitle } from "../../atoms/FooterCardTitle";
import { FooterCardPreview } from "../../atoms/FooterCardPreview";

export function ContentFooterCard() {
  return (
    <FooterCard>
      <FooterCardTitle title="Seg" />
      <Sun02D width={40} height={40} />
      <FooterCardPreview temp="15ºC" />
    </FooterCard>
  );
}
