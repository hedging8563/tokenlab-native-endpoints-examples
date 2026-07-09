const response = await fetch("https://api.tokenlab.sh/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKENLAB_API_KEY}`
  },
  body: JSON.stringify({
    model: "claude-sonnet-5",
    max_tokens: 256,
    messages: [
      {
        role: "user",
        content: "Explain TokenLab Anthropic Messages in one sentence."
      }
    ]
  })
});

console.log(await response.json());
