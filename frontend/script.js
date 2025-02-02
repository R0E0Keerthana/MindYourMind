import { auth, logout } from './firebase.js'; 

// Wait for the user to be authenticated
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("userName").textContent = user.displayName || "User";
  } else {
    // Redirect to login page if not authenticated
    window.location.href = "index.html";
  }
});

// Attach logout function to button click
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logout();
});
