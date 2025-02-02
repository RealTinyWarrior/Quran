import { View, Text } from "react-native";
import React from "react";
import Lang from "./Lang";

const Credits = () => {
    return (
        <View style={{ padding: "7.5%" }}>
            <Lang
                english="Al Quran"
                bengali="আল কুরআন"
                style={{ textAlign: "center", fontWeight: "900", fontSize: 36, marginBottom: "2.5%" }}
            />

            <Lang
                english="An all-in-one Quran application! Recite the holy Quran or read hadiths and much more! This
                mobile application is under development and is being being developed by Tahmidur Rahman
                [TinyWarrior], Tamjidur Rahman and Muntasir Rahman."
                bengali="একটি অল-ইন ওয়ান কুরআন অ্যাপ্লিকেশন! পবিত্র কোরআন তেলাওয়াত কোরুন বা হাদিস পড়ুন এবং আরও অনেক কিছু! এই
                মোবাইল অ্যাপ্লিকেশনটি তাহমিদুর রহমান [TinyWarrior], তামজিদুর রহমান ও মুনতাসির রহমান তৈরি করছেন।"
                style={{ textAlign: "center", lineHeight: 22, fontWeight: "400", color: "#616161" }}
            />
        </View>
    );
};

export default Credits;
