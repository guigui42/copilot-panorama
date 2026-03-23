import { useState, type ReactNode } from 'react';
import { AnalyticsClient } from '@github/hydro-analytics-client';
import { AnalyticsContext } from './AnalyticsContext';

const COLLECTOR_URL = 'https://collector.githubapp.com/copilot-panorama/collect';

function isProduction(): boolean {
  const host = window.location.hostname;
  return host !== 'localhost' && host !== '127.0.0.1';
}

function createClient(): AnalyticsClient | null {
  return isProduction() ? new AnalyticsClient({ collectorUrl: COLLECTOR_URL }) : null;
}

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [client] = useState(createClient);

  return (
    <AnalyticsContext.Provider value={client}>
      {children}
    </AnalyticsContext.Provider>
  );
}
