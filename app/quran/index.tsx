import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const QuranPage = () => {
    return (
        <View style={styles.body}>
            <SafeAreaView style={styles.container}>
                <Text>Quran Route</Text>
                <Link href="/">Home</Link>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    container: {
        position: "absolute",
        paddingLeft: "5%",
        paddingRight: "5%",
        width: "100%",
        height: "100%",
    },
});

export default QuranPage;
