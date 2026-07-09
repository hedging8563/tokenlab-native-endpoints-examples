const response = await fetch("https://api.tokenlab.sh/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKENLAB_API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-5.5",
    max_completion_tokens: 32,
    messages: [
      {
        role: "user",
        content: "Explain TokenLab Chat Completions in one sentence."
      }
    ]
  })
});

if (!response.ok) throw new Error(`Chat Completions failed with ${response.status}`);
console.log(await response.json());
