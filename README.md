# TankTalk Application

## Overview
TankTalk is a comprehensive Android app crafted for the vibrant community of aquarium hobbyists. At its core, it provides an interactive platform for users to manage and showcase their aquarium setups. Currently in development, the app includes a range of features tailored to meet the unique needs and passions of fish tank enthusiasts.

## Future Considerations
We're exploring the addition of a community section, a marketplace, and a friends network, recognizing the importance of sharing and collaboration in the aquarium hobby. The joy of this hobby lies not just in the individual journey but also in the collective experience of sharing progress and insights.

## Key Features
- **Dashboard**: Customizable for different tank setups, allowing users to save, copy, or share their configurations.
- **Equipment Management**: Users can add and track their aquarium equipment.
- **Parameter Analytics**: Monitoring and analyzing water parameters to ensure a healthy environment.
- **Livestock Cataloging**: Adding and managing information about the fish and other organisms in the tanks.
- **Integration with Existing Technologies**: Compatibility with systems like Apex controllers for advanced tank management.
- **Maintenance Routines**: Scheduling and logging regular maintenance activities.
- **Data Exporting**: Options to export data to letterhead, Excel, or cloud storage for detailed record-keeping.
- **Notes and Documentation**: A dedicated section for personal notes and observations.
- **Calendar & To-Do Lists**: Organizational tools for efficient aquarium management.
- **Ask AquaAI**: A ChatGPT-powered assistant offering expert advice, answering questions, and providing suggestions for aquarium care.
- **Community Shared Photos Toolbar**: A dynamic space for users to share and view photos of their aquarium setups, fostering a visually engaging community experience.
- **Community Board for Posting Questions or Showing Off**: A social platform within the app where users can post questions, share achievements, and discuss various aspects of aquarium care and management.
- **Fishipedia**: An extensive database of fish species and aquarium care tips, providing users with a wealth of information for both beginners and experienced hobbyists.

## Monetization and Accessibility
- **Free Core Services**: Basic features of the app will be freely accessible to all users.
- **Premium Cloud Features**: Advanced cloud-based functionalities will be offered as part of a subscription model.
- **Community Features**: Social and community-oriented features will remain free to foster a strong sense of community among users.
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
      - `community/` (Community Interaction Features)
        - `sharedMedia/` (Community Photo/Video Stream)
        - `communityBoard/` (Community board for posts and discussions)
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
