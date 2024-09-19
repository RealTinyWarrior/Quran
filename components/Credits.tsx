import { View, Text } from "react-native";
import React from "react";

const Credits = () => {
    return (
        <View style={{ padding: "7.5%" }}>
            <Text style={{ textAlign: "center", fontWeight: "900", fontSize: 40, marginBottom: "1.5%" }}>
                Al Quran
            </Text>

            <Text style={{ textAlign: "center", lineHeight: 22, fontWeight: "400" }}>
                An all-in-one Quran application! Recite the holy Quran or read hadiths and much more! This
                mobile application is under development and is being being developed by Tahmidur Rahman
                [TinyWarrior], Tamjidur Rahman, Muntasir Rahman and Rahad.
            </Text>
        </View>
    );
};

export default Credits;
