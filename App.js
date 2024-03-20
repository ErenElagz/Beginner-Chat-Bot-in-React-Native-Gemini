import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import Response from "./components/response";
import Message from "./components/message";

export default function App() {
	const [inputText, setInputText] = useState("");
	const [listData, setListData] = useState([]);
	const SearchInput = () => {
		setListData((prevList) => [...prevList, inputText]);
		setInputText("");
	};

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
					<Text style={{ fontSize: 24, fontWeight: "800", color: "#323232"}}>AtlasAI</Text>
				</View>
				<TouchableOpacity>
					<Image source={require("./assets/icons/menu.png")} style={styles.icon} />
				</TouchableOpacity>
			</View>

			{/* Content */}
			<FlatList
				style={{ paddingHorizontal: 16, marginBottom: 80 }}
				data={listData}
				renderItem={({ item }) => (
					<View>
						<Message message={item} />
						<Response prompt={item} />
					</View>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>

			{/* Search-Bar */}
			<View style={styles.searchBar}>
				<TextInput placeholder="Ask to Atlas AI" style={styles.input} value={inputText} onChangeText={(text) => setInputText(text)} selectionColor={"#323232"}></TextInput>
				<TouchableOpacity onPress={SearchInput}>
					<Image source={require("./assets/icons/right-arrow.png")} style={styles.icon} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 16,
		paddingTop: 36,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
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
		paddingVertical: 16,
		gap: 8,
	},
	input: {
		backgroundColor: "#fff",
		width: "100%",
		fontSize: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 32,
		borderWidth: 0.1,
	},
});
