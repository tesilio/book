function loggingResult() {
  const result = 1 + 1;
  console.log(result);
}

class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    loggingResult();
    return this._name;
  }

  get producers() {
    const result = 1+1;
    console.log(result);
    return this._producers;
  }

  get totalProduction() {
    const result = 1+1;
    console.log(result);
    return this._totalProduction;
  }

  get demand() {
    const result = 1+1;
    console.log(result);
    return this._demand;
  }

  get price() {
    const result = 1+1;
    console.log(result);
    return this._price;
  }

  set totalProduction(value) {
    this.test();
    this._totalProduction = value;
  }

  test() {
    const result = 1 + 1;
    console.log(result);
  }

  set demand(value) {
    this._demand = parseInt(value);
  }

  set price(value) {
    this._price = parseInt(value);
  }

  get shortfall() {
    return this._demand - this.totalProduction;
  }

  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      })
    return result;
  }
}


class Producer {
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get cost() {
    return this._cost;
  }

  get name() {
    return this._name;
  }

  get production() {
    return this._production;
  }

  set cost(value) {
    this._cost = parseInt(value);
  }

  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}

module.exports.Province = Province;
module.exports.Producer = Producer;
