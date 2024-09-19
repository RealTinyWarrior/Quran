import { Text } from "react-native";
import React, { useContext } from "react";
import { LanguageContext } from "../app/_layout";

const Lang = ({ english, bengali }: { english: string; bengali: string }) => {
    const [language] = useContext(LanguageContext);
    return <Text>{language == "English" ? english : bengali}</Text>;
};

export default Lang;
