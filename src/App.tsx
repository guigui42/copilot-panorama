import { useState } from 'react';
import { layers } from './data/layers';
import type { Component } from './data/layers';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import LayerSection from './components/LayerSection';
import DetailPanel from './components/DetailPanel';

const LAYER_COLORS = layers.map((l) => l.color);

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="poster">
        {layers.map((layer, i) => (
          <div key={layer.id}>
            <LayerSection
              layer={layer}
              onComponentClick={setSelectedComponent}
            />
            {i < layers.length - 1 && (
              <div
                className="layer-connector"
                style={{
                  '--connector-from': LAYER_COLORS[i],
                  '--connector-to': LAYER_COLORS[i + 1],
                } as React.CSSProperties}
              />
            )}
          </div>
        ))}
      </main>

      <section className="insights">
        <div className="insights-header">
          <h2 className="insights-title">How the system actually works</h2>
          <p className="insights-subtitle">Key architectural insights most teams miss</p>
        </div>
        <div className="insights-grid">
          <div className="insight-card">
            <span className="insight-icon">🧠</span>
            <strong>Instructions load FIRST</strong> — they're always-on passive memory.
            Every prompt sees them before anything else fires.
          </div>
          <div className="insight-card">
            <span className="insight-icon">🧩</span>
            <strong>Skills are INDEXED, not loaded</strong> — Copilot reads the description
            in <code>SKILL.md</code> frontmatter first, then injects the full body only when
            it matches your prompt.
          </div>
          <div className="insight-card">
            <span className="insight-icon">🔒</span>
            <strong>Hooks are the only deterministic primitive.</strong> Instructions are
            advisory. Hooks are enforcement. They fire at every lifecycle point.
          </div>
          <div className="insight-card">
            <span className="insight-icon">🔀</span>
            <strong>The LLM is the router.</strong> There's no separate orchestrator — the
            model reads indexed agent descriptions and skill frontmatter to decide what to
            activate. That's why writing good descriptions matters.
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          Built for GitHub Copilot users ·{' '}
          <a
            href="https://docs.github.com/en/copilot/concepts/agents"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full docs on the composable system ↗
          </a>
        </p>
      </footer>

      <DetailPanel
        component={selectedComponent}
        onClose={() => setSelectedComponent(null)}
      />
    </>
  );
}

export default App;
