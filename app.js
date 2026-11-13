// Aurora UI Interactive Scope Estimator
document.addEventListener("DOMContentLoaded", () => {
  const scopeSelect = document.getElementById("scopeSelect");
  const speedSelect = document.getElementById("speedSelect");
  const output = document.getElementById("estimateOutput");

  const pricingTable = {
    landing: { rapid: "$850 USD · 3 Days", standard: "$650 USD · 7 Days" },
    api: { rapid: "$750 USD · 3 Days", standard: "$500 USD · 5 Days" },
    fullstack: { rapid: "$1,800 USD · 5 Days", standard: "$1,400 USD · 10 Days" }
  };

  function updateEstimate() {
    const scope = scopeSelect.value;
    const speed = speedSelect.value;
    if (pricingTable[scope] && pricingTable[scope][speed]) {
      output.textContent = pricingTable[scope][speed];
    }
  }

  scopeSelect.addEventListener("change", updateEstimate);
  speedSelect.addEventListener("change", updateEstimate);
  updateEstimate();
});
