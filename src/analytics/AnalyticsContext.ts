import { createContext } from 'react';
import type { AnalyticsClient } from '@github/hydro-analytics-client';

export const AnalyticsContext = createContext<AnalyticsClient | null>(null);
