/**
 * 예시
 */
class ProductionPlan {
  constructor(production) {
    // this._production = production;
    this._initialProduction = production; // info: 변수 쪼개기
    this._productionAccumulator = 0; // info: 변수 쪼개기
    this._adjuestments = [];
  }

  get production() {
    // return this._production;
    assert(this._productionAccumulator === this.calculatedProductionAccumulator); // info: 어서션 추가
    return this._initialProduction + this._productionAccumulator; // info: 변수 쪼개기
  }

  applyAdjustment(anAdjustment) {
    this._adjuestments.push(anAdjustment);
    // this._production += anAdjustment.amount;
  }

  // info: 변수 쪼개기
  get calculatedProductionAccumulator() {
    return this._adjuestments.reduce((sum, a) => sum + a.amount, 0);
  }
}
