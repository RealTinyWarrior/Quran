import { Text } from "react-native";
import React, { useContext } from "react";
import { LanguageContext } from "../app/_layout";
import { TextStyle } from "react-native";

const Lang = ({ english, bengali, style }: { english: string; bengali: string; style?: TextStyle }) => {
    const [language] = useContext(LanguageContext);
    return <Text style={style}>{language == "English" ? english : bengali}</Text>;
};

export default Lang;
