# DEADLINE — The Hollow Creek Murder

An interactive, single-case 1987 detective mystery with GPT-4o-mini dialogue, playable in a browser. Fictional characters, places and story.

## Run and deploy

1. Upload **all files and folders** from this project into a GitHub repository (keep `api/chat.js` in its `api` folder).
2. In Vercel select **Add New → Project**, import the GitHub repository, choose Framework Preset **Other** if prompted, and deploy.
3. In Vercel project **Settings → Environment Variables**, set `OPENAI_API_KEY` to your API key for Production (also Preview / Development if needed). **Never** put it in HTML, JavaScript sent to browsers, or GitHub.
4. Redeploy after adding the key. Open the Vercel URL and test chatting with a character.
5. For local dev, install Vercel CLI and use `vercel dev` with the environment configured locally.

## How to play

- Adjust AI temperature before the game starts (0–2); it affects model sampling and clue phrasing/difficulty, **not canonical facts**.
- Choose people on the left, ask your own questions, inspect places, collect evidence, revisit characters, consult Jamie the ghost, and submit a final accusation.
- Use the evidence drawer and case board to track progress. Progress is saved in this browser using localStorage; it is not synchronized across devices.
- The **Demo Tour** button unlocks representative clues quickly for a short professor demonstration without revealing the killer.

## Implementation notes

- `index.html`: all UI, CSS and client-side gameplay.
- `api/chat.js`: Vercel Node serverless endpoint calls OpenAI `gpt-4o-mini`, validates allowed characters, constrains each role's knowledge, handles conversations and authenticates nothing beyond reasonable size checks. The key stays on the server.
- `api/case.js`: shared canonical case definitions and role knowledge used only on the server.
- **Educational demo, not hardened production security.** Game progress and clue unlocks are stored client-side, and a technically sophisticated player could manipulate them. To make competitive scoring tamper-resistant, move authoritative session and evidence state to server storage and add abuse protections / rate limiting. Public Vercel deployments can incur API costs; configure usage limits and consider authentication.
- The chat API needs access to your account's `gpt-4o-mini` model. If a request fails, the UI displays an error; it does not pretend to have received a real AI answer.
- Temperature values are supported by `gpt-4o-mini`; difficulty instructions affect clarity of hints, not the truth of the story.

## Story logic

One fixed killer and a coherent evidence chain. The player must identify the killer, motive and decisive piece of evidence. Key revelations are gated by discoveries and do not rely on stochastic model improvisation. All names and places fictional.
