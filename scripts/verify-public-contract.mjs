const OPENAPI_URL = "https://docs.tokenlab.sh/openapi.json";
const MODELS_URL = "https://api.tokenlab.sh/v1/models";

const requiredPaths = [
  "/v1/chat/completions",
  "/v1/responses",
  "/v1/messages",
  "/v1beta/models/{model}:generateContent",
  "/v1/models"
];

const requiredModels = ["gpt-5.5", "claude-sonnet-5", "gemini-3.5-flash"];

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

const [openapi, catalog] = await Promise.all([
  fetchJson(OPENAPI_URL),
  fetchJson(MODELS_URL)
]);

for (const path of requiredPaths) {
  if (!openapi.paths?.[path]) throw new Error(`OpenAPI is missing ${path}`);
}

const modelIds = new Set((catalog.data || []).map(({ id }) => id));
for (const model of requiredModels) {
  if (!modelIds.has(model)) throw new Error(`Public catalog is missing ${model}`);
}

console.log(`Verified ${requiredPaths.length} endpoint contracts and ${requiredModels.length} model IDs.`);
