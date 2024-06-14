document
    .getElementById("generate-btn")
    .addEventListener("click", async function() {
        const userInput = document.getElementById("user-input").value;
        try {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer Your Api key",
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        messages: [{
                            role: "user",
                            content: userInput,
                        }, ],
                    }),
                }
            );
            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                document.getElementById("output").innerText =
                    data.choices[0].message.content;
            } else {
                document.getElementById("output").innerText =
                    "No response from the AI model.";
            }
        } catch (error) {
            console.error("Error:", error);
            document.getElementById("output").innerText =
                "Error generating response.";
        }
    });

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("user-input").value = "";
    document.getElementById("output").innerText = "";
});