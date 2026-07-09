const response = await fetch("https://api.tokenlab.sh/v1beta/models/gemini-3.5-flash:generateContent", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKENLAB_API_KEY}`
  },
  body: JSON.stringify({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Explain TokenLab Gemini native routing in one sentence."
          }
        ]
      }
    ],
    generationConfig: {
      maxOutputTokens: 32
    }
  })
});

if (!response.ok) throw new Error(`Gemini generateContent failed with ${response.status}`);
console.log(await response.json());
