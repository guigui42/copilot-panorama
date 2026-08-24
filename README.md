# Copilot Panorama

An interactive visual guide to major GitHub Copilot surfaces, customizations, and efficiency practices across three views:

### `.github/` Composable Stack

The customization layer that lives in your repository:

1. **Always-On Context** — Instructions that automatically apply to every conversation
2. **On-Demand Capabilities** — Custom agents, skills, and MCP servers
3. **Enforcement & Automation** — Hooks and agentic workflows
4. **Distribution** — Plugins that package agents, skills, hooks, and integrations

### Copilot Everywhere

All the surfaces where Copilot meets you:

1. **IDE** — Inline Suggestions, Chat, Agent Mode, and third-party agent harnesses
2. **Standalone Apps** — GitHub Copilot CLI and the GitHub Copilot app
3. **GitHub Cloud** — Copilot cloud agent, code review, third-party coding agents, Slack, and Teams

### Efficiency Tips

Current guidance for AI credits, context, prompts, model and reasoning selection, caching, validation, MCP governance, and Copilot CLI session tools.

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
- ✨ Links to official documentation and selected [Awesome GitHub Copilot](https://awesome-copilot.github.com/) community resources

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

MIT
