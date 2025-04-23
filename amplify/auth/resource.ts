import { referenceAuth } from "@aws-amplify/backend";

const getEnvVar = (name: string): string => {
	const value = process.env[name]?.toString();
	if (!value) {
		throw new Error(`${name} is not defined in environment variables`);
	}
	return value;
};

export const auth = referenceAuth({
	userPoolId: getEnvVar("USER_POOL_ID"),
	identityPoolId: getEnvVar("IDENTITY_POOL_ID"),
	authRoleArn: getEnvVar("AUTH_ROLE_ARN"),
	unauthRoleArn: getEnvVar("UNAUTH_ROLE_ARN"),
	userPoolClientId: getEnvVar("USER_POOL_CLIENT_ID"),
});
