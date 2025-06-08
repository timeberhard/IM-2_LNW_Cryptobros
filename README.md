# IM-2_LNW_Cryptobros

## Kurzbeschreibung des Projekts

Unsere Krypto-Tracking-App zeigt die Echtzeitpreise der wichtigsten Kryptowährungen sowie die Markttrends der letzten 24 Stunden und der letzten sieben Tage an. Benutzer können zudem sieben Tage historische Preisdaten in einem Diagramm anzeigen lassen. Das hilft ihnen, Marktbewegungen zu analysieren und fundierte Entscheidungen zu treffen. Die App bietet eine einfache Benutzeroberfläche, aktualisierte Daten und visuelle Trends.

## Learnings und Schwierigkeiten

> Eigentlich wollte ich das Diagramm mit einem SVG erstellen. Das war jedoch zu aufwändig. Dafür ist die Chart.js-Library besser geeignet. Die Lernkurve ist etwas steil, danach geht es aber schnell.
>
> -- <cite>Luc Guerraz</cite>

> Die Arbeit mit ChatGPT machte die Arbeit effizienter. Allerdings war der Code tw. sehr komplex zB. bei grossen Elementen. Die Anwendung funktioniert einiges einfacher, bei vielen kleinen “Bausteinen” die man selbst zusammensetzt.
>
> -- <cite>Tim Eberhard</cite>

## Benutzte Ressourcen und Prompts

ChatGPT kam zum Einsatz, unter anderem mit folgenden Prompts:

- js date such as 2025-05-05T13:44:57.363Z to Updated 4m ago in seconds, minutes, hours, days, months or years
- I have a ChartJS line diagram. I am using a createLinearGradient as backgroundColor can you write a custom interpolator function the creates a smooth fade when the background gradient changes
- Using JS: I give an array with numbers and it must find a number bigger than the biggest and a number smaller than the smallest. The numbers should be simple such as 0.25 and 0.5 or 75000 and 80000
  
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