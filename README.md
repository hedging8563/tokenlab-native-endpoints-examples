# TokenLab Native Endpoints Examples

[![Public contract](https://github.com/hedging8563/tokenlab-native-endpoints-examples/actions/workflows/contract.yml/badge.svg)](https://github.com/hedging8563/tokenlab-native-endpoints-examples/actions/workflows/contract.yml)

Copyable examples for TokenLab native endpoint families beyond generic OpenAI-compatible chat.

## Setup

```bash
cp .env.example .env
export TOKENLAB_API_KEY=sk-your-tokenlab-key
npm install
npm test
```

## Examples

- `examples/chat-completions.mjs`
- `examples/responses.mjs`
- `examples/anthropic-messages.mjs`
- `examples/gemini-generate-content.mjs`
- `examples/list-models.mjs`

## Compatibility Check

`npm run verify:contract` checks the live OpenAPI document for Chat Completions, Responses, Anthropic Messages, Gemini generateContent, and model discovery, then verifies the example model IDs against the public catalog. GitHub Actions repeats this check daily.

## Links

- TokenLab docs: https://docs.tokenlab.sh
- API formats: https://docs.tokenlab.sh/guides/api-formats
- Model catalog: https://api.tokenlab.sh/v1/models
