# Mind Your Mind - Mental Health Wellness App
A simple and soothing mental health wellness app designed to help users with daily affirmations, journaling, mood tracking, and more. It includes features like a Proud Moments Jar, Comfort Corner, and Chatbot to promote mental well-being.

## Features
* **Daily Affirmations**: Displays a random affirmation each time the page loads or on button click.
* **Mood Tracker**: Track your daily mood and review trends over time.
* **Journaling**: Option for voice or text journaling to reflect on your thoughts.
* **Proud Moments Jar**:  Store and revisit personal achievements with text/audio entries (saved as text), date & time stamps, and a random moment surprise feature.
* **Comfort Corner**: A peaceful space with relaxing content and resources.
* **Chatbot**: Interactive chatbot for emotional support and guidance.
* **Meditation Zone**: Access meditation content like audio and videos for mindfulness.

## Tech Stack
* Frontend: HTML, CSS, JavaScript
* Backend: Python (Flask will be added later)
* Database: Firebase (Authentication, Firestore for affirmations)
* Other Tools: live-server for local development

## Project Setup
* Clone the repository

```bash
git clone https://github.com/R0E0Keerthana/MindYourMind.git
cd MindYourMind
```
* Install dependencies

Ensure you have Node.js and npm installed.
If you want to use live-server for local development:
```bash
npm install -g live-server
```
* Run the project locally

```bash
live-server
```
This will launch the project on your browser and automatically refresh the page when changes are made.

## Firebase Setup
To connect the app with Firebase, follow these steps:

* Go to the Firebase Console.
* Create a new project or use an existing one.
* Add Firestore to your project.
* Get your Firebase config from the Project settings in the Firebase Console and update it in firebase.js.
