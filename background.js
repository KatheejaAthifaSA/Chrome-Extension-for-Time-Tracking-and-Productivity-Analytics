let currentTabId = null;
let currentDomain = null;
let startTime = null;
const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];


function getDomain(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return null;
  }
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabChange(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabChange(tab);
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    endTracking();
  }
});

function handleTabChange(tab) {
  endTracking();
  if (tab.url.startsWith("http")) {
    currentDomain = getDomain(tab.url);
    startTime = Date.now();
    currentTabId = tab.id;
  }
}

function endTracking() {
  if (currentDomain && startTime) {
    const duration = Math.floor((Date.now() - startTime) / 1000);
    saveTime(currentDomain, duration);
  }
  currentDomain = null;
  startTime = null;
  currentTabId = null;
}

function saveTime(domain, duration) {
  chrome.storage.local.get(["timeData"], (result) => {
    const timeData = result.timeData || {};
    if (!timeData[domain]) timeData[domain] = 0;
    timeData[domain] += duration;
    chrome.storage.local.set({ timeData });
     const category = productiveSites.includes(domain)
      ? "productive"
      : unproductiveSites.includes(domain)
      ? "unproductive"
      : "neutral";

    fetch("http://localhost:3000/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site: domain,
        duration,
        category
      })
    }).catch(err => console.error("Server error:", err));
  });
  
}
