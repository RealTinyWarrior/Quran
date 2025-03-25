import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Navbox from "../../components/Navbox";
import BackButton from "../../assets/icons/back";
import Lang from "../../components/Lang";
import { router } from "expo-router";

export default function Hadith() {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#c4a6f7", "#bfe8f5", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                    <View style={styles.top}>
                        <View style={{ overflow: "hidden", borderRadius: 4 }}>
                            <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                                <BackButton style={{ width: 30, height: 35, marginTop: "2%" }} />
                            </TouchableNativeFeedback>
                        </View>

                        <Lang english="Hadiths" bengali="হাদিস" style={{ fontWeight: 900, fontSize: 27 }} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ alignItems: "center", marginBottom: "3%" }}>
                        <View style={{ width: "90%" }}>
                            <StatusBar style="auto" />

                            <View style={{ display: "flex", marginTop: "1.5%" }}>
                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sahih"
                                        preTextBengali="সহীহ"
                                        titleBengali="আল-বুখারি"
                                        title="Al-Bukhari"
                                        href="/bukhari"
                                        fill
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sahih"
                                        preTextBengali="সহীহ"
                                        titleBengali="মুসলিম"
                                        title="Muslim"
                                        href="/muslim"
                                        fill
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sunan Abu"
                                        preTextBengali="সুনান"
                                        titleBengali="আবু দাউদ"
                                        title="Dawood"
                                        href="/dawood"
                                        fill
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sunan"
                                        preTextBengali="সুনান"
                                        titleBengali="আন-নাসায়ী"
                                        title="An-Nasa'i"
                                        href="/nasai"
                                        fill
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sunan"
                                        preTextBengali="সুনান"
                                        titleBengali="আত-তিরমিজী"
                                        title="At-Tirmidhi"
                                        href="/tirmidhi"
                                        fill
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Sunan Ibn"
                                        preTextBengali="সুনান"
                                        titleBengali="ইবন মাজা"
                                        title="Majah"
                                        href="/majah"
                                        fill
                                    />
                                </View>

                                <View style={[styles.navButtons, { justifyContent: "center" }]}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        marginBottom: "4%",
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
