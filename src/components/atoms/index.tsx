import React from "react";
import { Text, Image } from "react-native";

export const TextAtom = ({ style, children }) => (
  <Text style={style}>{children}</Text>
);

export const IconAtom = ({ IconComponent, size, color }) => (
  <IconComponent size={size} color={color} />
);
export const ImageAtom = ({ source, width, height }) => (
  <Image source={source} style={{ width, height }} />
);
