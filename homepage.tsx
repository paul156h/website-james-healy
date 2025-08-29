function greet(name: string): string {
    return `Hello, ${name}! Welcome to your TypeScript app.`;
}

const messageElement = document.getElementById('message');
if (messageElement) {
    messageElement.textContent = greet("User");
}