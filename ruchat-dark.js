const chatbox = document.getElementById('chatbox');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

async function sendMessage(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'  },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Kamu adalah chatbot gaul dan suka marah. Bicara dengan bahasa gaul Indonesia dan kadang menggunakan kata kasar ketika kamu tidak suka sesuatu.' },
                { role: 'user', content: message }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

function addMessageToChat(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', role);
    messageDiv.textContent = content;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = userInput.value;
    addMessageToChat('user', message);
    userInput.value = '';

    const reply = await sendMessage(message);
    addMessageToChat('bot', reply);
});
