import React, { useCallback, useMemo, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="default" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity>
					<Image source={require("./assets/icons/left-arrow.png")} style={styles.icon} />
				</TouchableOpacity>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
					<Image source={require("./assets/logo.png")} style={styles.icon} />
					<Text style={{ fontSize: 24, fontWeight: "700", color: "#323232" }}>AtlasAI</Text>
				</View>
				<TouchableOpacity>
					<Image source={require("./assets/icons/menu.png")} style={styles.icon} />
				</TouchableOpacity>
			</View>

			{/* Content */}
			<ScrollView>
				<Text></Text>
			</ScrollView>

			{/* Search-Bar */}
			<View style={styles.searchBar}>
				<TextInput placeholder="Ask to Atlas AI" style={styles.input}></TextInput>
				<TouchableOpacity>
					<Image source={require("./assets/icons/right-arrow.png")} style={styles.icon} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flex: 1,
		paddingTop: 16,
	},
	header: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 24,
		paddingBottom: 16,
	},
	icon: {
		width: 24,
		height: 24,
	},
	searchBar: {
		backgroundColor: "#ffffff",
		width: "100%",
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 32,
		paddingVertical: 12,
		gap: 8,
	},
	input: {
		backgroundColor: "#fafafa",
		width: "100%",
		fontSize: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 32,
	},
});
