const chatbox = document.getElementById('chatbox');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

async function sendMessage(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
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
