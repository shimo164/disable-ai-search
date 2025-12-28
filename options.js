const checkbox = document.getElementById('hideAI');

chrome.storage.sync.get(['hideAI'], (result) => {
  checkbox.checked = result.hideAI !== false;
});

checkbox.addEventListener('change', () => {
  chrome.storage.sync.set({ hideAI: checkbox.checked });
});
