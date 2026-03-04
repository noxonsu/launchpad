/**
 * React 17 compatibility patch for wagmi v3 / @tanstack/react-query v5.
 *
 * These libraries use useSyncExternalStore which was introduced in React 18.
 * This file patches React 17 to add the missing export via the official shim.
 *
 * IMPORTANT: This file must be imported BEFORE wagmi/react-query modules.
 * It is imported at the top of src/index.js.
 */
import * as React from 'react'
import { useSyncExternalStore } from 'use-sync-external-store/shim'
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'

if (!React.useSyncExternalStore) {
  React.useSyncExternalStore = useSyncExternalStore
}
if (!React.useSyncExternalStoreWithSelector) {
  React.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector
}
