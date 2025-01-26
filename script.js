const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const typingIndicator = document.getElementById('typing-indicator');
const customCursor = document.getElementById('custom-cursor');

// Detecting dark mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Adding custom cursor effect
document.body.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Send message function
async function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user-message');
  userInput.value = '';
  scrollToBottom();

  // Display typing indicator
  typingIndicator.style.display = 'block';

  // Send request to API
  const response = await fetch('https://ai-proxy-api-three.vercel.app/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qweneva',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 1000,
      stream: false,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });

  const data = await response.json();
  const assistantMessage = data.choices[0].message.content;

  // Hide typing indicator and show assistant's message
  typingIndicator.style.display = 'none';
  appendMessage(assistantMessage, 'assistant-message');
  scrollToBottom();
}

// Append messages to the chatbox
function appendMessage(message, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.innerHTML = message;
  chatBox.appendChild(messageElement);
}

// Scroll to the bottom of the chatbox
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Initial message
appendMessage('Hello! How can I help you today?', 'assistant-message');
