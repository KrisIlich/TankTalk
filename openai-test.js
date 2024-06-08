import OpenAI from "openai";
import Configuration from "openai";
import * as os from "os";

// Directly assign the API key for testing
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }],
        });

        console.log('Full Response:', response);
        console.log('Choices:', response.choices[0].message.content);
    } catch (error) {
        console.error("Error fetching completion:", error);
    }
}

main();