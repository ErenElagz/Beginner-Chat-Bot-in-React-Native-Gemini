import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
	const [inputText, setInputText] = useState("");
	const [listData, setListData] = useState([]);
	const handleButtonPress = () => {
		setListData((prevList) => [...prevList, inputText]);
		setInputText("");
		console.log(listData);
	};
	const d = new Date();

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
					<Text style={{ fontSize: 24, fontWeight: "800", color: "#323232" }}>AtlasAI</Text>
				</View>
				<TouchableOpacity>
					<Image source={require("./assets/icons/menu.png")} style={styles.icon} />
				</TouchableOpacity>
			</View>

			{/* Content */}
			<ScrollView style={{ paddingHorizontal: 16, marginBottom: 80 }}>
				<FlatList
					data={listData}
					renderItem={({ item }) => (
						<View>
							<View style={styles.message}>
								<View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
									<View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }}>
										<Image source={require("./assets//icons/user.png")} style={{ width: 32, height: 32 }} />
										<Text style={{ fontWeight: 500 }}>ErenElagz</Text>
									</View>
									<Text style={{ fontSize: 10, fontWeight: 600 }}>
										{d.getHours()}:{d.getMinutes()}
									</Text>
								</View>
								<Text style={{ fontSize: 14, width: "100%", flex: 1, paddingLeft: 32 }}>{item}</Text>
							</View>
							<View style={styles.response}>
								<View style={{  flexDirection: "row", alignItems: "center", justifyContent: "space-between",width:"100%" }}>
									<Text style={{ fontSize: 10, fontWeight: 600 }}>
										{d.getHours()}:{d.getMinutes()}
									</Text>
									<View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }}>
										<Text style={{ fontWeight: 500 }}>ErenElagz</Text>
										<Image source={require("./assets//icons/user.png")} style={{ width: 32, height: 32 }} />
									</View>
								</View>
								<Text style={{ fontSize: 14, width: "100%", flex: 1, paddingLeft: 32 }}>{item}</Text>
							</View>
						</View>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</ScrollView>

			{/* Search-Bar */}
			<View style={styles.searchBar}>
				<TextInput
					placeholder="Ask to Atlas AI"
					style={styles.input}
					value={inputText}
					onChangeText={(text) => setInputText(text)} // Input alanındaki metni state'e atıyoruz
				></TextInput>
				<TouchableOpacity onPress={handleButtonPress}>
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
	message: {
		flexDirection: "column",
		gap: 8,
		backgroundColor: "#f1f2f3",
		marginBottom: 16,
		padding: 16,
		borderRadius: 16,
		alignItems: "top",
	},
	response: {
		flexDirection: "column",
		gap: 8,
		backgroundColor: "#fafafa",
		marginBottom: 16,
		padding: 16,
		borderRadius: 16,
		alignItems: "top",
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
		backgroundColor: "#fff",
		width: "100%",
		fontSize: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 32,
		borderWidth: 0.1,
	},
});
