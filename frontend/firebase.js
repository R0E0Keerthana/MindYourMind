// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 

// Firebase Configuration
const firebaseConfig = {
    //FIREBASE CONFIG DETAILS SKIPPED FOR PRIVACY REASONS
    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const provider = new GoogleAuthProvider(); // Google Auth Provider

// Force reauthentication and prompt the user for their Google account each time
provider.setCustomParameters({
  prompt: 'select_account',
});

// Google Sign-In function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    window.location.href = "home.html"; // Redirect to home after login
  } catch (error) {
    console.error("Login Error:", error);
  }
};

// Sign-Out function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
    window.location.href = "index.html"; // Redirect to login page after sign-out
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

// Export Auth for use in other files
export { auth };
export const db = getFirestore(app); // Export Firestore instance