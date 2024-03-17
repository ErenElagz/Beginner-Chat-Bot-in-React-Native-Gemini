import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SectionList, Image, SafeAreaView, ScrollView, TextInput } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="default" />

			{/* Header */}
			<View style={styles.header}>
				<Image source={require("./assets/icons/back-arrow.png")} style={styles.icon} />
				<View style={styles.content}>
					<Image source={require("./assets/logo.png")} style={styles.icon} />
					<Text style={styles.title}>AtlasAI</Text>
				</View>
				<Image source={require("./assets/icons/menu.png")} style={styles.icon} />
			</View>
			{/* Content */}
			<ScrollView></ScrollView>
			{/* Search-Bar */}
			<View style={styles.search}>
				<TextInput placeholder="Ask to Atlas AI" style={styles.input}></TextInput>
				<Image source={require("./assets/icons/arrow-right.png")} style={{ width: 32, height: 32, opacity: 0.5 }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	prompts: {
		alignItems: "left",
		paddingHorizontal: 20,
		marginTop: 16,
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	content: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: "#323232",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: 48,
	},
	icon: {
		width: 24,
		height: 24,
	},
	input: {
		width: "92%",
		borderRadius: 32,
		paddingVertical: 12,
		paddingHorizontal: 20,
		backgroundColor: "#f1f2f3",
		fontSize: 16,
	},
	search: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		gap: 4,
		paddingVertical: 12,
		backgroundColor: "#fafafa",
	},
});
