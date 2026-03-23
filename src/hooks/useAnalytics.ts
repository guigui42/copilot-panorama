import { useContext, useEffect, useCallback, useRef } from 'react';
import { AnalyticsContext } from '../analytics';
import type { Context } from '@github/hydro-analytics-client';

export function useAnalytics() {
  return useContext(AnalyticsContext);
}

export function usePageView(context?: Context) {
  const client = useAnalytics();
  const sentRef = useRef<string | null>(null);
  const contextKey = context ? JSON.stringify(context) : '';

  useEffect(() => {
    if (!client) return;
    // Avoid duplicate sends for the same context
    if (sentRef.current === contextKey) return;
    sentRef.current = contextKey;
    client.sendPageView(context);
  }, [client, context, contextKey]);
}

export function useTrackEvent() {
  const client = useAnalytics();

  return useCallback(
    (type: string, context: Context) => {
      client?.sendEvent(type, context);
    },
    [client],
  );
}
