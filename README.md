# TankTalk Application

## Overview (Work in Progress)
TankTalk is an Android application designed for aquarium enthusiasts. It features... TBD, more to add. 
- Community, marketplace, friends are under consideration to be added, the biggest thing with fish tank hobbyists is their extreme need to share their progress.
- Dashboard will include saving different tank setups and copying or sharing those setups, adding equipment, parameter anayltics, adding livestock, connecting to existing technologies like apex controllers, Maintenance routines, exporting data to letterhead, excel, or to the cloud, notes section, Calendar To Do lists
- Free application, cloud features are behind paywall, community features will always be free

## Frontend (Android App)

### Language
- **Kotlin**

### Framework
- **Android Studio**

### Libraries
- **Jetpack Compose**: For declaritive UIs
- **Retrofit**: For network requests
- **LiveData and ViewModel**: For managing UI-related data

### Homepage Functionality
- **Login Page**: Initial screen for user authentication. Supports Google/Live sign-ins
- **Dashboard**: Once authenticated, the user is redirected to the dashboard, which displays fish tank parameters and other features

## Backend (Google Cloud & Firebase)

### Google Cloud Platform (GCP) Services
- **App Engine or Cloud Run**: Hosting backend
- **Cloud Firestore or Cloud SQL**: Database Management
- **Cloud Functions**: For serverless backend functions
- **Pub/Sub and Cloud Messaging**: For real-time notifications
- **Cloud Storage**: For storing large files like images or videos

### Firebase
- **Firebase Authentication**: Integrated with GCP for Google/Live sign-ins
- **Firebase Analytics**: For tracking user interactions and app performance

## Integration for ‘Ask Aqua AI’
- **OpenAI API**: For integrating ChatGPT functionalities

## Project Structure

### Frontend (Android App)
- `src/main/kotlin/`
  - `com/tanktalk/` (Main package)
    - `ui/` (All UI-related Kotlin classes)
      - `login/` (Login and authentication UI)
      - `home/` (Dashboard components post-login)
      - `chat/` (ChatGPT integration UI)
      - `fishipedia/` (Fish database UI)
      - `settings/` (Settings UI)
      - `notifications/` (Notifications UI)
    - `model/` (Data models for the app)
    - `network/` (Network services, Retrofit instances)
    - `repository/` (Data handling, both local and remote)
    - `utils/` (Utility classes)
  - `res/` (Resources like layouts, strings, images)

### Backend (GCP & Firebase)
- **Authentication**: Setup using Firebase Authentication integrated with Google Cloud
- **Database**: Use Cloud Firestore/Cloud SQL for data storage
- **Serverless Functions**: Implement logic with Cloud Functions
- **Notifications**: Set up using Firebase Cloud Messaging and GCP Pub/Sub
