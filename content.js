chrome.storage.sync.get(['hideAI'], ({ hideAI }) => {
  if (hideAI !== false) {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    
    if (q && !q.includes('-ai')) {
      params.set('q', q + ' -ai');
      location.replace('?' + params);
    }
  }
});
