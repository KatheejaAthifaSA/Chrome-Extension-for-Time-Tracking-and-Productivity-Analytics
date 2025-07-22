const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];

chrome.storage.local.get("timeData", (result) => {
  const data = result.timeData || {};
  let productiveTime = 0;
  let unproductiveTime = 0;
  let labels = [];
  let times = [];

  for (const [site, seconds] of Object.entries(data)) {
    if (productiveSites.includes(site)) {
      productiveTime += seconds;
    } else if (unproductiveSites.includes(site)) {
      unproductiveTime += seconds;
    }
    labels.push(site);
    times.push(seconds / 60); // convert to minutes
  }

  // Pie Chart
  const ctx = document.getElementById('productivityChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Productive', 'Unproductive'],
      datasets: [{
        label: 'Time (minutes)',
        data: [
          Math.round(productiveTime / 60),
          Math.round(unproductiveTime / 60)
        ],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });

  // Breakdown
  const breakdown = document.getElementById("breakdown");
  breakdown.innerHTML = "<h3>Website Usage:</h3>";
  for (const [site, seconds] of Object.entries(data)) {
    const minutes = Math.floor(seconds / 60);
    const category = productiveSites.includes(site)
      ? "Productive"
      : unproductiveSites.includes(site)
      ? "Unproductive"
      : "Neutral";
    breakdown.innerHTML += `<p><strong>${site}</strong>: ${minutes} min (${category})</p>`;
  }
});
