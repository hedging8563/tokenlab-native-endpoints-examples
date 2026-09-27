const base = 'https://api.tokenlab.sh';
const model = 'jev-1.13';
const detail = await fetch(`${base}/v1/models/${model}`, { signal: AbortSignal.timeout(30_000) });
if (!detail.ok) throw new Error(`Model discovery failed with ${detail.status}`);
const contract = (await detail.json()).tokenlab?.public_contract;
if (!contract?.public_operations?.includes('systemone') || contract.request_endpoint !== '/v1/systemone') {
  throw new Error('The model does not declare the native System One operation');
}
if (!process.env.TOKENLAB_API_KEY) throw new Error('Set TOKENLAB_API_KEY before running this billable example');
const response = await fetch(`${base}/v1/systemone`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.TOKENLAB_API_KEY}`, 'Content-Type': 'application/json' },
  signal: AbortSignal.timeout(60_000),
  body: JSON.stringify({
    model,
    state: { ticket: 'Please refund the duplicate charge.' },
    questions: { refund: { type: 'noul', instructions: 'Is a refund requested?' } },
  }),
});
const result = await response.json();
if (!response.ok) throw new Error(JSON.stringify({ status: response.status, requestId: response.headers.get('x-request-id'), error: result }));
console.log(JSON.stringify({ answers: result.answers, usage: result.usage }, null, 2));
// A semantic decision is not permission to perform the requested action.
