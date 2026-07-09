const response = await fetch("https://api.tokenlab.sh/v1/models");
if (!response.ok) throw new Error(`Model discovery failed with ${response.status}`);
const data = await response.json();
console.log(data.data?.slice(0, 5).map((model) => model.id));
