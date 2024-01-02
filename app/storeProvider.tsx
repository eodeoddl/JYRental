'use client';

import { AppStore, makeStore } from '@/RTK/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // initialize store
    // storeRef.current.dispatch()
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
