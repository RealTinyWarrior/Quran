import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PrayerTimes, CalculationMethod, Coordinates } from "adhan";
import moment from "moment-timezone";
import Lang from "./Lang";
import locations, { jela } from "../app/timeline/locations";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

function convertToBengaliTime(time: string) {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const moment = time.split(" ")[1];
    time = time.split(" ")[0];

    return time.replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)]) + " " + moment;
}
const formatTime = (time: Date) => moment(time).format("h:mm A");
const setLocation = async (location: string) => {
    await AsyncStorage.setItem("location", location.toLowerCase());
};

const PrayerTimesComponent = ({ location }: { location: string }) => {
    const [selectedJela, setSelectedJela] = useState(location[0].toUpperCase() + location.slice(1));
    const params = CalculationMethod.MuslimWorldLeague();

    const coordinates = new Coordinates(locations[location.toLowerCase()][0], locations[location.toLowerCase()][1]);
    let prayerTimes = new PrayerTimes(coordinates, new Date(), params);

    const [times, setTimes] = useState([
        {
            group: "Fajr",
            groupBengali: "ফজর",
            color: "#4B0082", // Indigo
            times: [
                { key: "Start", time: formatTime(prayerTimes.fajr), bengali: "শুরু" },
                { key: "End", time: formatTime(prayerTimes.sunrise), bengali: "শেষ" },
            ],
        },
        {
            group: "Dhuhr",
            groupBengali: "যোহর",
            color: "skyblue", // Sky Blue
            times: [{ key: "Start", time: formatTime(prayerTimes.dhuhr), bengali: "শুরু" }],
        },
        {
            group: "Asr",
            groupBengali: "আসর",
            color: "#FF8C00", // Dark Orange
            times: [
                { key: "Start", time: formatTime(prayerTimes.asr), bengali: "শুরু" },
                { key: "End", time: formatTime(prayerTimes.maghrib), bengali: "শেষ" },
            ],
        },
        {
            group: "Maghrib",
            groupBengali: "মাগরিব",
            color: "#DC143C", // Crimson
            times: [
                { key: "Start", time: formatTime(prayerTimes.maghrib), bengali: "শুরু" },
                { key: "End", time: formatTime(prayerTimes.isha), bengali: "শেষ" },
            ],
        },
        {
            group: "Isha",
            groupBengali: "ইশা",
            color: "#191970", // Midnight Blue
            times: [{ key: "Start", time: formatTime(prayerTimes.isha), bengali: "শুরু" }],
        },
        {
            group: "Iftar & Suhoor",
            groupBengali: "ইফতার ও সেহেরি",
            color: "#32CD32", // Lime Green
            times: [
                { key: "Iftar", time: formatTime(prayerTimes.maghrib), bengali: "ইফতারের সময়" },
                { key: "Suhoor End", time: formatTime(prayerTimes.fajr), bengali: "সেহেরির শেষ সময়" },
            ],
        },
        {
            group: "Sun Timings",
            groupBengali: "সূর্যের সময়সূচী",
            color: "#FFA500", // Orange
            times: [
                { key: "Sunrise", time: formatTime(prayerTimes.sunrise), bengali: "সূর্যদয়ের সময়" },
                { key: "Midday", time: formatTime(prayerTimes.dhuhr), bengali: "দিপ্রহরের সময়" },
                { key: "Sunset", time: formatTime(prayerTimes.maghrib), bengali: "সূর্যাস্তের সময়" },
            ],
        },
    ]);

    const onChange = (item: any) => {
        // This is in UPPERCASE
        const location = item.label;

        setSelectedJela(location);
        setLocation(location);

        prayerTimes = new PrayerTimes(
            new Coordinates(locations[location.toLowerCase()][0], locations[location.toLowerCase()][1]),
            new Date(),
            params
        );

        setTimes([
            {
                group: "Fajr",
                groupBengali: "ফজর",
                color: "#4B0082", // Indigo
                times: [
                    { key: "Start", time: formatTime(prayerTimes.fajr), bengali: "শুরু" },
                    { key: "End", time: formatTime(prayerTimes.sunrise), bengali: "শেষ" },
                ],
            },
            {
                group: "Dhuhr",
                groupBengali: "যোহর",
                color: "skyblue", // Sky Blue
                times: [{ key: "Start", time: formatTime(prayerTimes.dhuhr), bengali: "শুরু" }],
            },
            {
                group: "Asr",
                groupBengali: "আসর",
                color: "#FF8C00", // Dark Orange
                times: [
                    { key: "Start", time: formatTime(prayerTimes.asr), bengali: "শুরু" },
                    { key: "End", time: formatTime(prayerTimes.maghrib), bengali: "শেষ" },
                ],
            },
            {
                group: "Maghrib",
                groupBengali: "মাগরিব",
                color: "#DC143C", // Crimson
                times: [
                    { key: "Start", time: formatTime(prayerTimes.maghrib), bengali: "শুরু" },
                    { key: "End", time: formatTime(prayerTimes.isha), bengali: "শেষ" },
                ],
            },
            {
                group: "Isha",
                groupBengali: "ইশা",
                color: "#191970", // Midnight Blue
                times: [{ key: "Start", time: formatTime(prayerTimes.isha), bengali: "শুরু" }],
            },
            {
                group: "Iftar & Suhoor",
                groupBengali: "ইফতার ও সেহেরি",
                color: "#32CD32", // Lime Green
                times: [
                    { key: "Iftar", time: formatTime(prayerTimes.maghrib), bengali: "ইফতারের সময়" },
                    { key: "Suhoor End", time: formatTime(prayerTimes.fajr), bengali: "সেহেরির শেষ সময়" },
                ],
            },
            {
                group: "Sun Timings",
                groupBengali: "সূর্যের সময়সূচী",
                color: "#FFA500", // Orange
                times: [
                    { key: "Sunrise", time: formatTime(prayerTimes.sunrise), bengali: "সূর্যদয়ের সময়" },
                    { key: "Midday", time: formatTime(prayerTimes.dhuhr), bengali: "দিপ্রহরের সময়" },
                    { key: "Sunset", time: formatTime(prayerTimes.maghrib), bengali: "সূর্যাস্তের সময়" },
                ],
            },
        ]);
    };

    const data = jela.map((item, index) => ({
        label: item,
        value: index.toString(),
    }));

    return (
        <>
            <View style={{ paddingHorizontal: "5%" }}>
                <Dropdown
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder={selectedJela}
                    search
                    inputSearchStyle={styles.inputSearchStyle}
                    value={selectedJela}
                    onChange={onChange}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    placeholderStyle={styles.itemTextStyle}
                    containerStyle={{ borderRadius: 8, marginTop: "1%" }}
                    searchPlaceholder="Enter a Location"
                />
            </View>
            <ScrollView style={styles.container}>
                {times.map((group, idx) => (
                    <View
                        key={"group-" + idx}
                        style={[
                            styles.groupContainer,
                            { marginTop: idx == 0 ? "1.5%" : "0%", borderRightColor: group.color },
                        ]}
                    >
                        <Lang style={styles.groupTitle} bengali={group.groupBengali} english={group.group} />

                        {group.times.map((elm, i) => (
                            <View key={"time-" + i} style={styles.timeContainer}>
                                <Lang english={elm.key} bengali={elm.bengali} style={{ lineHeight: 20 }} />
                                <Lang english={elm.time} bengali={convertToBengaliTime(elm.time)} />
                            </View>
                        ))}
                    </View>
                ))}

                <View style={{ height: "10%" }}></View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "1%",
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    groupTitle: {
        fontSize: 25,
        fontWeight: "800",
        marginBottom: "2.2%",
    },
    groupContainer: {
        marginHorizontal: "5%",
        marginBottom: "3%",
        padding: "4%",
        backgroundColor: "white",
        borderRadius: 6,
        elevation: 4,
        borderRightWidth: 3,
    },
    dropdown: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: "2%",
        paddingVertical: "5%",
        marginTop: "5%",
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    itemTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    inputSearchStyle: {
        borderRadius: 6,
    },
});

export default PrayerTimesComponent;
