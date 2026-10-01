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
- `examples/systemone.mjs` — synchronous Jev typed decisions; checks the public operation contract before a billable request. Requires `TOKENLAB_API_KEY`. It preserves answers/usage and never executes the classified action.

## Compatibility Check

`npm run verify:contract` checks the live OpenAPI document for Chat Completions, Responses, Anthropic Messages, Gemini generateContent, System One decisions, and model discovery, then verifies the example model IDs against the public catalog. This check makes no paid inference calls. GitHub Actions repeats it daily.

## GitHub Action

Use the public contract check in another repository:

```yaml
steps:
  - uses: hedging8563/tokenlab-native-endpoints-examples@v1.1.0
    with:
      models: gpt-5.5,claude-sonnet-5
```

`models` is optional. It accepts comma-separated TokenLab logical model IDs and defaults to the model IDs used by this repository's examples. The OpenAPI document and public model catalog URLs are fixed by the action.

Version `v1.1.0` adds the native System One endpoint and Jev to the default contract check. The historical `v1` tag is unchanged; pin `v1.1.0` to use the updated checks.

## Links

- TokenLab docs: https://tokenlab.sh/docs
- API formats: https://tokenlab.sh/docs/en/guides/api-formats
- Model catalog: https://api.tokenlab.sh/v1/models
