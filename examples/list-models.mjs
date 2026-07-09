const response = await fetch("https://api.tokenlab.sh/v1/models");
const data = await response.json();
console.log(data.data?.slice(0, 5).map((model) => model.id));
