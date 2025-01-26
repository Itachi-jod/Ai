<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Advanced AI Chatbot Interface with a modern design, dark mode toggle, and enhanced user experience.">
  <meta name="author" content="Itachiffx">
  <title>AI Chatbot Interface</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Dark/Light Mode Toggle -->
  <div id="theme-toggle">
    <button aria-label="Toggle Theme" onclick="toggleTheme()">🌙/🌞</button>
  </div>

  <!-- Chat Container -->
  <div id="chat-container">
    <!-- Chat Header -->
    <div id="chat-header">
      <h2>AI Chatbot</h2>
    </div>

    <!-- Chat Messages -->
    <div id="chat-box" aria-live="polite" role="log"></div>

    <!-- Typing Indicator -->
    <div id="typing-indicator">Typing...</div>

    <!-- User Input Area -->
    <div id="user-input-container">
      <input 
        type="text" 
        id="user-input" 
        placeholder="Type a message..." 
        autocomplete="off" 
        onkeypress="handleKeyPress(event)"
        aria-label="Type your message here"
      >
      <button id="send-btn" onclick="sendMessage()" aria-label="Send Message">Send</button>
    </div>
  </div>

  <!-- Custom Cursor Effect -->
  <div id="custom-cursor"></div>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
