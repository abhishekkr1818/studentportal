# Features Implemented
1.User Authentication
Sign up and log in with email and password
User credentials stored in localStorage for persistence (dummy backend)
Prevents duplicate registrations by email

2.Protected Routes
Dashboard and Users pages are accessible only after login
Sticky Navbar
Always visible at the top
Responsive, with app name/logo, navigation links, dark mode toggle, and user info

3.Home Page
Welcome message and brief introduction
Users Page
Fetches and displays user data from an external API (jsonplaceholder.typicode.com/users)
Responsive card layout with loading and error states

4.Dashboard Page
Shows summary cards for GPA, Attendance, and Subjects
Responsive grid layout

5.Dark Mode
Toggle between light and dark themes using Tailwind CSS v4 custom variant
User preference is saved

6.Animations
Subtle hover and transition effects on cards and buttons

# What I Found Challenging / Learned
->Learned to persist dummy authentication using localStorage and manage state across signup and login.
->Gained experience adapting to Tailwind CSS v4’s new dark mode configuration.
->Understood how to protect routes in React using <Navigate /> and custom guards.
->Improved responsive design skills with Tailwind utility classes.
->Enhanced user experience by handling loading and error states for API calls.
->Deepened knowledge of React Context and hooks for state and theme management.
