import { db } from './firebase.js'; // Import the Firestore instance from your firebase.js file
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Function to fetch and display a random affirmation
async function loadAffirmation() {
    try {
        const querySnapshot = await getDocs(collection(db, "affirmations"));
        const affirmations = querySnapshot.docs.map(doc => doc.data().text);
        
        if (affirmations.length > 0) {
            const randomIndex = Math.floor(Math.random() * affirmations.length);
            document.getElementById("affirmationText").textContent = affirmations[randomIndex];
        } else {
            document.getElementById("affirmationText").textContent = "I am loved, I am magic, and I am exactly where I need to be.";
        }
    } catch (error) {
        console.error("Error fetching affirmations:", error);
        document.getElementById("affirmationText").textContent = "Sorry, we couldn’t load affirmations right now.";
    }
}

// Load a new affirmation on page load and button click
document.addEventListener("DOMContentLoaded", loadAffirmation);
document.getElementById("refreshButton").addEventListener("click", loadAffirmation);
