import { useState } from 'react';
import { layers } from './data/layers';
import type { Component } from './data/layers';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import LayerSection from './components/LayerSection';
import DetailPanel from './components/DetailPanel';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        {layers.map((layer) => (
          <LayerSection
            key={layer.id}
            layer={layer}
            onComponentClick={setSelectedComponent}
            defaultExpanded={layer.number === 1}
          />
        ))}
      </main>
      <footer className="footer">
        <p>
          Built for GitHub Copilot users · <a href="https://docs.github.com/en/copilot/concepts/agents" target="_blank" rel="noopener noreferrer">Full docs on the composable system</a>
        </p>
      </footer>
      <DetailPanel component={selectedComponent} onClose={() => setSelectedComponent(null)} />
    </>
  );
}

export default App;
