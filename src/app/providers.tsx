import type { PropsWithChildren } from 'react';
import { TimeProvider } from '@/shared/context/TimeContext'; // Usando el alias @/

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <TimeProvider>
      {children}
    </TimeProvider>
  );
}