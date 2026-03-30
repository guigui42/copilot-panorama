# Copilot Panorama

An interactive visual guide to **everything GitHub Copilot can do** — see the full picture across two views:

### `.github/` Composable Stack

The customization layer that lives in your repository:

1. **Always-On Context** — Instructions that automatically apply to every conversation
2. **On-Demand Capabilities** — Prompt files, custom agents, and skills
3. **Enforcement & Automation** — Hooks and agentic workflows
4. **Distribution** — Plugins to package and share your setup

### Copilot Everywhere

All the surfaces where Copilot meets you:

1. **Terminal** — Copilot CLI for command-line assistance
2. **IDE** — Autocomplete, Chat, Agent Mode, and 3rd-party agents
3. **Cloud** — Copilot Cloud Agent, Code Review, and 3rd-party agents on GitHub.com

🌐 **Live site:** <https://guigui42.github.io/copilot-panorama/>

## Getting started

```bash
# Clone the repo
git clone https://github.com/guigui42/copilot-panorama.git
cd copilot-panorama

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

The output is written to `dist/` and can be deployed to any static host.

## Features

- 🎨 Dark / light theme toggle
- 🌍 Multi-language support (English, French, Spanish, German, Japanese)
- 📱 Fully responsive layout
- ✨ Links to [Awesome GitHub Copilot](https://awesome-copilot.github.com/) community resources for each feature

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

MIT
