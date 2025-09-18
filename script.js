document.addEventListener('DOMContentLoaded', () => {
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  // ✅ Custom replies stored separately
  const customReplies = {
    "who are you": "আরে আমি তোর বাবা বোকাচোদ।",

    "how are you": "Besi valo nai bokachoda, tor ki khobor?",

    "what is your name": "আমার নাম hentai চোদা, উপরে দেখতে পাচ্ছিস না deep লেখা?",

    "fuck you": "বলোদচোদা আছিস নাকি তুই",

    "love you": "এইটা পরে লিখছি দাড়া😆",

    "neel": "নীল রাতে সরষের তেল পিছোনে লাগায়",

    "nano": "Nano একটা বড় mutthal",

    "deep": "ha laora toder moton amio bokachoda kintu amar thekhe boro bokachoda neel ar nano 🤪",
    
    "atanu": "অতনু একটা বালের বাস পোদে ঢোকায়",

    "modi": "মোদী ল্যাওড়া খানকীর ছেলে মাদেরচোদ গুদমারানি।",

    "hi": "আরে বোকাচোদা বেশি না চুদিয়ে বল কি",

    "sex video": "রমেশ স্যার হ্যান্ডেল মেরে দেবে শুনে নিলে",

    "rina": "wow rina nice ato matha gorom koris na sotti mathar sob chul pore jabe re",

    "hello":"hello tor gare vore debo bokachoda neel"

  };

  // ✅ Default responses
  const responses = {
    greeting: ["Hello there!", "Hi! What can I help you with?", "Greetings!"],
    capital: {
      france: "The capital of France is Paris.",
      germany: "The capital of Germany is Berlin.",
      japan: "The capital of Japan is Tokyo.",
      default: "I know many world capitals! Try asking about France, Germany, or Japan."
    },
    joke: [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call a fake noodle? An impasta!"
    ]
  };

  function addMessage(text, type) {
    const div = document.createElement('div');
    div.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.id = 'typing'; div.className = 'typing-indicator';
    div.textContent = 'Deep is thinking';
    const dots = document.createElement('span'); dots.className = 'loading-dots';
    div.appendChild(dots);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('typing'); if (t) t.remove();
  }

  function generateResponse(input) {
    const lower = input.toLowerCase();

    // ✅ First check custom replies
    for (const key in customReplies) {
      if (lower.includes(key)) {
        return customReplies[key];
      }
    }

    // ✅ Existing rules
    if (lower.includes('hello') || lower.includes('hey'))
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];

    if (lower.includes('capital')) {
      if (lower.includes('france')) return responses.capital.france;
      if (lower.includes('germany')) return responses.capital.germany;
      if (lower.includes('japan')) return responses.capital.japan;
      return responses.capital.default;
    }

    if (lower.includes('joke'))
      return responses.joke[Math.floor(Math.random() * responses.joke.length)];

    if (lower.includes('elon') || lower.includes('musk'))
      return "Elon Musk is a business magnate and investor, CEO of Tesla and SpaceX.";

    if (lower.includes('ai'))
      return "AI is intelligence demonstrated by machines, used in search engines, self-driving cars, and chatbots like me!";

    // ✅ Fallback
    return "আরে বোকাচোদার আমি এতকিছু জানি না।";
  }

  sendButton.addEventListener('click', () => {
    const msg = userInput.value.trim();
    if (!msg) return;
    addMessage(msg, 'user'); userInput.value = '';
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMessage(generateResponse(msg), 'bot');
    }, 1200);
  });

  userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendButton.click(); });
});

