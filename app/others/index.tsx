import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../../assets/icons/back";
import { router } from "expo-router";
import Navbox from "../../components/Navbox";
import Lang from "../../components/Lang";

export default function Home() {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#c4a6f7", "#bfe8f5", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={{ overflow: "hidden", borderRadius: 4 }}>
                        <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                            <BackButton style={{ width: 30, height: 35, marginTop: "2%" }} />
                        </TouchableNativeFeedback>
                    </View>

                    <Lang english="Others" bengali="অন্যান্য" style={{ fontWeight: 900, fontSize: 27 }} />
                </View>

                <View style={{ display: "flex", marginTop: "3%" }}>
                    <View style={{ display: "flex", marginTop: "3%" }}>
                        <View style={styles.navButtons}>
                            <Navbox
                                preText="Word"
                                preTextBengali="আরবি"
                                title="Meanings"
                                titleBengali="শব্দার্থ"
                                href="/coming"
                            />

                            <Navbox
                                preText="Names"
                                preTextBengali="গুণবাচক"
                                title="of Attributes"
                                titleBengali="নাম"
                                href="/coming"
                            />
                        </View>

                        <View style={styles.navButtons}>
                            <Navbox
                                preText="Scientific"
                                preTextBengali="বৈজ্ঞানিক"
                                title="Verses"
                                titleBengali="আয়াত"
                                href="/coming"
                            />

                            <Navbox
                                preText="Subjective"
                                preTextBengali="বিষয়ভিত্তিক"
                                title="Verses"
                                titleBengali="আয়াত"
                                href="/coming"
                            />
                        </View>

                        <Lang
                            style={{ fontSize: 16, textAlign: "center", marginTop: 16, color: "gray" }}
                            english="Coming soon!"
                            bengali="শিগ্রই আসছে!"
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

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

    gradient: {
        position: "absolute",
        height: "105%",
        width: "150%",
        opacity: 0.5,
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

    back: {
        position: "relative",
        right: 50,
        padding: 10,
    },
    navButtons: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2.7%",
    },
});
