/**
 * 예시
 */
class ProductionPlan {
  get production() {
    // asset(this._production === this.calculatedProduction)// info: 어서션 추가 및 확인 후 제거
    // return this._production;
    // return this.calculatedProduction; // info: 변경
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0); // info: 인라인
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    // this._production += anAdjustment.amount; // info: 정리
  }

  // info: 인라인
  // get calculatedProduction() { // info: 누적값 계산 로직 추가
  //   return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  // }
}
