import React from "react";
import { View, Text, StyleSheet, ViewStyle, ScrollView, Linking } from "react-native";
import Lang from "./Lang";

export type RenderableContent = {
    type: "title" | "paragraph" | "header" | "subcomment" | "arabic" | "bismillah";
    content?: string;
    contentBengali?: string;
    parentStyle?: ViewStyle;
    fontSize?: number;
    alignRight?: boolean;
};

export const renderLine: RenderableContent = {
    type: "paragraph",
    content: "",
    contentBengali: "",

    parentStyle: {
        borderBottomWidth: 1,
        borderColor: "#b8b5c4",
        marginBottom: "3%",
    },
};

export const renderGap: RenderableContent = {
    type: "paragraph",
    content: "",
    contentBengali: "",

    parentStyle: {
        marginVertical: "3%",
    },
};

const ArticleRenderer = ({ data }: { data: RenderableContent[] }) => {
    const openLink = async (url: string) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) Linking.openURL(url);
    };

    return (
        <ScrollView style={{ paddingHorizontal: "5%" }}>
            <View style={{ marginBottom: "3%" }}>
                {data.map((elm, i) => {
                    switch (elm.type) {
                        case "title":
                            return (
                                <View style={elm.parentStyle} key={`title-${i}`}>
                                    <Lang
                                        style={styles.title}
                                        english={elm.content || ""}
                                        bengali={elm.contentBengali || ""}
                                    />
                                </View>
                            );

                        case "subcomment":
                            return (
                                <View style={elm.parentStyle} key={`subcomment-${i}`}>
                                    <Lang
                                        english={elm.content || ""}
                                        bengali={elm.contentBengali || ""}
                                        style={styles.subComment}
                                    />
                                </View>
                            );

                        case "paragraph":
                            return (
                                <View style={elm.parentStyle} key={`paragraph-${i}`}>
                                    <Lang
                                        style={{
                                            fontSize: elm.fontSize || 16,
                                            fontWeight: "bold",
                                            textAlign: elm.alignRight ? "right" : "left",
                                            lineHeight: elm.fontSize == undefined ? 26 : elm.fontSize,
                                        }}
                                        english={elm.content || ""}
                                        bengali={elm.contentBengali || ""}
                                    />
                                </View>
                            );

                        case "arabic":
                            return (
                                <View style={elm.parentStyle} key={`paragraph-${i}`}>
                                    <Text
                                        style={{
                                            fontSize: elm.fontSize || 28,
                                            fontFamily: "ScheherazadeRegular",
                                            marginVertical: "3%",
                                        }}
                                    >
                                        {elm.content || ""}
                                    </Text>
                                </View>
                            );

                        case "bismillah":
                            return (
                                <View
                                    style={{
                                        width: "100%",
                                        borderRadius: 8,
                                        padding: 12,
                                        alignItems: "center",
                                    }}
                                    key={"bismillah" + i}
                                >
                                    <Text style={{ fontSize: 30, width: "90%", textAlign: "center" }}>
                                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                                    </Text>

                                    <Lang
                                        english="in the name of Allah, Most Gracious, Most Merciful"
                                        bengali="পরম করুণাময় অসীম দয়ালু আল্লাহ তায়ালার নামে শুরু করছি"
                                        style={{
                                            textAlign: "center",
                                            marginTop: 16,
                                            color: "#292929",
                                        }}
                                    />
                                </View>
                            );
                    }
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#292929",
        marginVertical: 8,
    },

    subComment: {
        fontSize: 13,
        color: "#6b7280",
    },
});

export default ArticleRenderer;
