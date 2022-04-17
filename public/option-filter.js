import stockList from "./data.js";

export default {
  data() {
    return {
      message: "Hello Vue!",
      stockList,
      fetchedData: "",
      stock: "",
      exchange: "NFO",
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      expiry: "",
      price: "500.0",
      optionType: "CE",
      selectedSymbols: [],
      stepInterval: 1,
    };
  },
  methods: {
    clear() {
      this.selectedSymbols = [];
    },
    undo() {
      this.selectedSymbols.pop();
      this.selectedSymbols.pop();
    },
    fetchData() {
      let filtered = this.stockList.filter((st) => st.symbol == this.stock);
      if (filtered.length > 0) {
        let formatedPrice = Number(this.price).toFixed(1);
        let symbolString = `${this.exchange} ${this.stock} ${this.expiry} ${formatedPrice} ${this.optionType} `;
        let underlyingSymbolString = `NSE ${this.stock}`;
        this.fetchedData = filtered.length ? symbolString : "";
        this.selectedSymbols.push({
          symbol: underlyingSymbolString,
          lotsize: 0,
          steps: 0,
        });
        this.selectedSymbols.push({
          symbol: symbolString,
          lotsize: filtered[0].lotsize,
          steps: filtered[0].steps,
        });
      }
    },
    updateStepInterval() {
      let filtered = this.stockList.filter((st) => st.symbol == this.stock);
      this.stepInterval = filtered[0].steps;
    },
  },
  computed: {
    currentMonth() {
      let mon = new Date().getMonth();
      return this.months[mon];
    },
  },
  mounted() {
    this.expiry = this.currentMonth;
    this.fetchData();
  },
};
