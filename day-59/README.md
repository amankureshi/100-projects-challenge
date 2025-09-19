# Grammar Checker App

🔗 **Live Demo:** [Insert Link Here]

## 📄 Description

The **Grammar Checker App** is an interactive tool built with **React.js** that checks your text for grammar mistakes and provides suggestions for corrections. The app leverages the **LanguageTool API** for accurate grammar checking and uses **React** and **Tailwind CSS** for a seamless and responsive user interface.

## 🔧 Technologies Used

- **React.js**
- **CSS**
- **LanguageTool API**
- **Tailwind CSS** (for styling)
- **React Icons** (for UI components)

## 🌟 Features

- **Grammar Suggestions**: Detects common grammar mistakes like typos, punctuation errors, capitalization issues, and more.
- **Apply Fixes**: Users can click on suggested replacements to fix the text.
- **Clear Text**: A button to clear both the input text and suggestions.
- **Responsive Design**: Fully responsive design that works on mobile and desktop.
- **Loading State**: A loading spinner while the app is checking the text.
- **Error Handling**: Displays user-friendly error messages in case of issues.

## 🚀 Challenges Faced

- **API Integration**: Fetching and formatting data from the **LanguageTool API** correctly to display grammar suggestions.
- **State Management**: Managing multiple states for text input, loading, errors, and suggestions.
- **User Interaction**: Allowing users to interact with the suggestions and apply fixes dynamically while keeping the UI smooth.

## 🎯 Key Learnings

- **React Hooks**: Learned how to use `useState` for state management and dynamic updates in React.
- **API Handling**: Worked with external APIs (like LanguageTool) to fetch and process data.
- **Tailwind CSS**: Gained proficiency in using Tailwind CSS for creating responsive layouts and styling.
- **Conditional Rendering**: Implemented error handling, loading states, and dynamic rendering based on fetched data.

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── GrammarChecker.jsx    # Handles text input, grammar checking, and suggestions display.
│   ├── SuggestionCard.jsx    # Displays each grammar suggestion with replacement options.
│
├── utils/                    # Utility folder for helper functions or modules
│   └── Check.js              # Contains functions related to grammar checking logic.
│
├── assets/
│   └── grammar_2.png         # Image used for illustration.
│
├── App.jsx                    # Main App component where the GrammarChecker component is used.
├── App.css                   # Global styles for the app.
└── main.jsx                  # Entry point of the app (typically renders <App /> component)
```
