# IM-2_LNW_Cryptobros

## Das Projekt zum Laufen bringen

Speichere zuerst deinen [coingeko](https://www.coingecko.com/en/api) API Key in der Datei `.dev.vars`.

```txt
API_KEY=
```

Und zweitens, starte den Entwicklungsserver

```bash
npx wrangler pages dev ./public
```

Wenn du weder `npx` noch einen API-Schlüssel hast, kannst du die öffentliche coingeko API benutzen, indem du die API_BASE_DOMAIN Variable in `public/main.js` änderst

```js
const API_BASE_DOMAIN = 'https://api.coingecko.com/'
// const API_BASE_DOMAIN = '/'
```