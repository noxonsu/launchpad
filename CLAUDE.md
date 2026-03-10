# IDO Launchpad — Project Instructions

## Deploy

**Схема:** `npm run build` → CI пушит `build/` → `appsource/launchpad/gh-pages` → GitHub Pages

```
noxonsu/launchpad (source) → CI (.github/workflows/deploy.yml)
  → peaceiris/actions-gh-pages → appsource/launchpad/gh-pages
    → GitHub Pages legacy mode → launchpad.onout.org
```

**Проверить деплой:**
```bash
gh api repos/appsource/launchpad/commits/gh-pages --jq '{sha:.sha[0:8], date:.commit.committer.date}'
curl -s https://launchpad.onout.org/index.html | python3 -c "import sys; h=sys.stdin.read(); print('OK' if 'unpkg' not in h else 'BROKEN')"
```

## Stack — что НЕ обновлять

| Пакет | Причина |
|-------|---------|
| `react` / `react-dom` | Остаётся на 18.x — wagmi v3 несовместим с React 19 |
| `wagmi` | v3.x — последняя версия для @reown/appkit |
| `date-fns` | v2.x — @date-io/date-fns несовместим с v3/v4 |
| `web3` | v1.x — v4 полный rewrite API |
| `redux` / `react-redux` | v4/v7 — v5/v9 breaking changes |
| `yup` | v0.32 — v1 несовместим с formik |
| `styled-components` | v5 — v6 breaking changes |

## Важные детали

- `@material-ui/core` удалён (несовместим с React 18). Использовать `@mui/material/styles`
- Внешние CDN скрипты в HTML — запрещены (CORS при redirect с unpkg.com)
- `peaceiris/actions-gh-pages` стрипает `.github/` — нельзя передать workflows в build
- GitHub Pages должен быть в `legacy` режиме (не `workflow`)

## CI — критичные правила

Commit message c апострофами ломает heredoc. Всегда через env-переменную:
```yaml
env:
  COMMIT_MSG: ${{ github.event.head_commit.message }}
run: |
  FIRST_LINE=$(echo "$COMMIT_MSG" | head -1 | sed 's/"/\\"/g' | sed "s/'/\\'/g")
```
