require('dotenv').config();
import('node-fetch').then(fetchModule => {
    const fetch = fetchModule.default;
    // Resto de tu código aquí
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    async function analyzeSentiment(prompt) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 50
                })
            });

            const data = await response.json();
            return data.choices[0].text.trim();
        } catch (error) {
            console.error('Error:', error);
            return 'Error occurred';
        }
    }

    module.exports = {
        analyzeSentiment
    };
});
  


