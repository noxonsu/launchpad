# IDOFactory (Launchpad) — AI Agent Guide

## What is this project

IDOFactory is a white-label decentralized IDO launchpad platform.
Projects launch token sales, investors participate with supported tokens.

**Live:** https://launchpad.onout.org/
**Repo:** https://github.com/noxonsu/launchpad
**Landing:** https://onout.org/launchpad/

---

## Stack

- **Frontend:** React (CRA with config-overrides), TypeScript
- **Contracts:** Solidity (IDO contracts per project)
- **Distribution:** GitHub Pages + WordPress plugin (lp-wp.php)
- **CI:** GitHub Actions → yarn build → deploy

---

## Repository structure

```
src/                # React source
├── components/     # UI components
├── pages/          # App pages
└── utils/          # Contract helpers, chains

contracts/          # Solidity IDO contracts
migrations/         # Truffle migrations
public/             # Static assets
build/              # Production build (CI output)
docs/               # Documentation
lp-wp.php           # WordPress plugin
```

---

## Build & Deploy

```bash
# Install
yarn

# Dev server
yarn start

# Production build
yarn build
# Output: build/

# CI deploys automatically on push to main/master
```

**GitHub Pages:** `https://launchpad.onout.org/` served from `build/`.

---

## Common tasks

### Add new network support

Edit `src/utils/chains.ts` (or equivalent) to add network config.

### Deploy new IDO contract

Use Truffle migrations or Hardhat scripts in `contracts/`.

### Update frontend config

Edit network/contract addresses in `src/config.ts` or environment variables.

---

## Server

```
Hosting: GitHub Pages (noxonsu/launchpad)
SSH (if needed): ssh -i ~/.ssh/github_deploy_key root@95.217.227.162
```
