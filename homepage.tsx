function greet(name: string): string {
    return `Greetings, ${name}! Welcome to James Paul Healy's website.`;
}

const messageElement = document.getElementById('message');
if (messageElement) {
    messageElement.textContent = greet("User");
}