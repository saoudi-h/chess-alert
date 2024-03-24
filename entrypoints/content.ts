export default defineContentScript({
  matches: ['*://*.chess.com/*', '*://*.lichess.org/*'],
  main() {
    console.log('Hello content.');
  },
});
