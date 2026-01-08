const DEFAULT_MODE = 'udm14';
const VALID_MODES = new Set(['none', 'ai', 'udm14']);
const modeSelect = document.getElementById('mode');

function resolveMode({ mode, hideAI }) {
  if (VALID_MODES.has(mode)) {
    return mode;
  }

  if (hideAI === false) {
    return 'none';
  }

  return DEFAULT_MODE;
}

chrome.storage.sync.get(['mode', 'hideAI'], (result) => {
  const mode = resolveMode(result);
  modeSelect.value = mode;

  if (!VALID_MODES.has(result.mode)) {
    chrome.storage.sync.set({ mode });
  }
});

modeSelect.addEventListener('change', () => {
  chrome.storage.sync.set({ mode: modeSelect.value });
});
