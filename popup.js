const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];

chrome.storage.local.get("timeData", (result) => {
  const data = result.timeData || {};
  let productiveTime = 0;
  let unproductiveTime = 0;

  for (const [site, seconds] of Object.entries(data)) {
    if (productiveSites.includes(site)) {
      productiveTime += seconds;
    } else if (unproductiveSites.includes(site)) {
      unproductiveTime += seconds;
    }
  }

  const total = productiveTime + unproductiveTime;
  document.getElementById("summary").innerHTML = `
    <p>Productive: ${formatTime(productiveTime)}</p>
    <p>Unproductive: ${formatTime(unproductiveTime)}</p>
    <p>Total Tracked: ${formatTime(total)}</p>
  `;
});

function formatTime(sec) {
  const mins = Math.floor(sec / 60);
  return `${mins} min ${sec % 60} sec`;
}
