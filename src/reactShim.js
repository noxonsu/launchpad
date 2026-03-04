/**
 * React 17 + wagmi v3 compatibility shim.
 *
 * wagmi imports useSyncExternalStore directly from 'react' but React 17
 * does not export it. This module re-exports everything from the real react
 * package plus the useSyncExternalStore shim.
 *
 * The webpack alias 'react$' points to this file.
 * We import from 'react/index.js' (the real react CJS entry) to avoid circular resolution.
 */
/* eslint-disable import/no-extraneous-dependencies */
// Import the actual React using its direct file path to avoid alias recursion
const ReactReal = require('react/cjs/react.production.min.js')
const ReactDevReal = process.env.NODE_ENV !== 'production'
  ? require('react/cjs/react.development.js')
  : ReactReal

const React = process.env.NODE_ENV !== 'production' ? ReactDevReal : ReactReal

const { useSyncExternalStore: shimUseSyncExternalStore } = require('use-sync-external-store/shim')

// Re-export everything from real react
module.exports = {
  ...React,
  useSyncExternalStore: React.useSyncExternalStore || shimUseSyncExternalStore,
}
