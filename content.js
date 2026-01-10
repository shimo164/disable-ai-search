const DEFAULT_MODE = 'udm14';
const VALID_MODES = new Set(['none', 'ai', 'udm14']);

function resolveMode({ mode, hideAI }) {
  if (VALID_MODES.has(mode)) {
    return mode;
  }

  if (hideAI === false) {
    return 'none';
  }

  return DEFAULT_MODE;
}

chrome.storage.sync.get(['mode', 'hideAI'], (settings) => {
  const mode = resolveMode(settings);
  if (mode === 'none') {
    return;
  }

  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  if (!q) {
    return;
  }

  if (params.has('tbm')) {
    return;
  }

  if (mode === 'ai') {
    if (!q.includes('-ai')) {
      params.set('q', q + ' -ai');
      location.replace('?' + params);
    }
    return;
  }

  if (mode === 'udm14') {
    if (params.has('udm')) {
      return;
    }
    params.set('udm', '14');
    location.replace('?' + params);
  }
});
