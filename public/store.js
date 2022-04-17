import { reactive } from "vue";

export const store = reactive({
  loading: true,
  data: {},
  updateLoading(status = false) {
    this.loading = status;
  },
  updateResponse(data, symbol) {
    this.data[symbol] = data;
    this.loading = false;
  },
  getStrikesDetails(sym = "NIFTY") {
    return this.data[sym] ? this.data[sym].filteredStrikes : [];
  },
  getTotals(sym = "NIFTY") {
    return this.data[sym] ? this.data[sym].totals : {};
  },
  getExpiry(sym = "NIFTY") {
    return this.data[sym] ? this.data[sym].currentExpiry : "";
  },
  getChartData(sym = "NIFTY") {
    return this.data[sym] ? this.data[sym].totals.chart : {};
  },
});
