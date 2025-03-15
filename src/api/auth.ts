import {
  signIn as amplifySignIn,
  signOut as amplifySignOut,
  getCurrentUser,
} from "aws-amplify/auth";

// Sign in with email & password
export const signIn = async (email: string, password: string) => {
  try {
    const user = await amplifySignIn({ username: email, password });
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};

// Sign out the user
export const signOut = async () => {
  try {
    await amplifySignOut();
    console.log("User signed out");
  } catch (error) {
    console.error("Sign-out error:", error);
  }
};

// Get current authenticated user
export const getUser = async () => {
  try {
    return await getCurrentUser();
  } catch (error) {
    console.log("No authenticated user", error);
    return null;
  }
};
