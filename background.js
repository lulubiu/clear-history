chrome.action.onClicked.addListener(async () => {
  await chrome.browsingData.removeHistory({ since: 0 });
});
