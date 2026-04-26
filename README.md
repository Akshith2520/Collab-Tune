# CollabTune 🎸

CollabTune is a dynamic, real-time social networking and collaboration platform built specifically for musicians, producers, and artists. It allows users to discover talent, share their work, and connect through real-time messaging.

![UI Theme](https://img.shields.io/badge/UI-Glassmorphism-8b5cf6?style=flat-square)
![Database](https://img.shields.io/badge/Database-Firebase_Firestore-FFCA28?style=flat-square)
![Media](https://img.shields.io/badge/Media-Cloudinary-3448C5?style=flat-square)

## ✨ Key Features

* **Zero-Latency Networking:** The Explore page features optimistic UI updates and local browser caching, allowing for instant searching, filtering, and Follow/Unfollow actions without waiting for server responses.
* **Availability Status:** Users can set their status to *Open to Collabs*, *Currently Working*, or *Not Available*, allowing others to filter their searches to find active collaborators.
* **Real-Time Peer-to-Peer Chat:** A fully functional inbox and direct messaging system built on Firebase Firestore. Includes instant local inbox searching and read receipts.
* **Rich Media Sharing:** Users can create posts and send chat messages containing images, videos, and audio files. All media is handled securely and swiftly via Cloudinary Unsigned Uploads.
* **Dynamic Profiles:** Customizable user profiles featuring dynamic follower/following modals, profile picture uploads, and an organized grid of recent posts.
* **Glassmorphism UI:** A premium, modern design language featuring an animated particle canvas background, translucent frosted-glass panels, and responsive CSS variables.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Custom CSS3 (Flexbox/Grid, CSS Variables, Animations), Vanilla JavaScript (ES Modules)
* **Backend / Database:** Firebase v10 (Authentication, Cloud Firestore)
* **Media Storage:** Cloudinary API (Direct frontend uploads)

## 📂 Project Structure

```text
collabtune/
├── index.html          # Landing & Authentication page
├── home.html           # Main feed and dashboard
├── explore.html        # Discover musicians & filter by availability
├── profile.html        # User profiles, stats, and settings
├── createpost.html     # Upload media and publish posts
├── chat.html           # Real-time messaging and inbox
└── js/
    └── firebase-config.js  # Firebase initialization and exports
