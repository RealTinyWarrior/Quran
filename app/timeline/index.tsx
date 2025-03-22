import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PrayerTimesComponent from "../../components/PrayerTime";
import BackButton from "../../assets/icons/back";
import Lang from "../../components/Lang";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TimelinePage = () => {
    const [jela, setJela] = useState("dhaka");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocation = async () => {
            const location = (await AsyncStorage.getItem("location")) || "dhaka";
            setJela(location);
            setLoading(false);
        };

        getLocation();
    }, []);

    return (
        <View style={styles.body}>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                    <View style={styles.top}>
                        <View style={{ overflow: "hidden", borderRadius: 4 }}>
                            <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                                <BackButton style={{ width: 30, height: 35, marginTop: "2%" }} />
                            </TouchableNativeFeedback>
                        </View>

                        <Lang english="Timeline" bengali="সময়সূচী" style={{ fontWeight: 900, fontSize: 27 }} />
                    </View>
                </View>

                {!loading ? <PrayerTimesComponent location={jela} /> : <View></View>}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#e3e7e8",
    },

    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    back: {
        position: "relative",
        right: 50,
        padding: 10,
    },

    top: {
        height: 40,
        position: "relative",
        top: "2%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default TimelinePage;
