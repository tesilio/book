/**
 * 예시: 간단한 주문 클래스
 */
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    // info: 대입문의 우변 게터로 추출
    // const basePrice = this.basePrice;

    // info: 변수 인라인
    return this.basePrice * this.discountFactor;
  }

  get discountFactor() {
    let discountFactor = 0.98;

    // info: 변수 인라인
    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }
    return discountFactor;
  }

// info: 대입문 게터로 추출
  get basePrice() {
    return this._quantity * this._item.price;
  }
}
