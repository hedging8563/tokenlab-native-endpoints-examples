const response = await fetch("https://api.tokenlab.sh/v1/responses", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKENLAB_API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-5.5",
    input: "Explain TokenLab Responses in one sentence.",
    max_output_tokens: 32
  })
});

if (!response.ok) throw new Error(`Responses failed with ${response.status}`);
console.log(await response.json());
