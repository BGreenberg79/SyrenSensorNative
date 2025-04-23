import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);

const formFields = {
	signUp: {
		fields: {
			name: {
				order: 1,
				label: "Full Name",
				placeholder: "Enter your full name",
				isRequired: true,
			},
			email: {
				order: 2,
				label: "Email",
				placeholder: "Enter your email",
				isRequired: true,
			},
			phone_number: {
				order: 3,
				label: "Phone Number",
				placeholder: "Enter your phone number",
				isRequired: true,
			},
			birthdate: {
				order: 4,
				label: "Date of Birth",
				placeholder: "YYYY-MM-DD",
				isRequired: true,
			},
			gender: {
				order: 5,
				label: "Gender",
				placeholder: "Enter your gender identity",
			},
			address: {
				order: 6,
				label: "Address",
				placeholder: "Enter your address",
			},
			password: {
				order: 7,
				label: "Password",
				placeholder: "Create a strong password",
				isRequired: true,
			},
			confirm_password: {
				order: 8,
				label: "Confirm Password",
				placeholder: "Confirm your password",
				isRequired: true,
			},
		},
	},
};

const SignOutButton = () => {
	const { signOut } = useAuthenticator();
	return (
		<View style={styles.signOutButton}>
			<Button
				title='Sign Out'
				onPress={signOut}
			/>
		</View>
	);
};

const App = () => {
	return (
		<Authenticator.Provider>
			<Authenticator formFields={formFields}>
				<SignOutButton />
			</Authenticator>
		</Authenticator.Provider>
	);
};
// Test
const styles = StyleSheet.create({
	signOutButton: {
		alignSelf: "flex-end",
	},
});

export default App;
