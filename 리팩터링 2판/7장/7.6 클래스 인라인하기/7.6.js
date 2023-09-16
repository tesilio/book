/**
 * 예시
 */
// 배송 추적 정보를 표현하는 클래스 -> 아래 Shipment 클래스로 인라인 대상
// info: 결국 삭제하기
// class TrackingInformation {
//   // 배송 회사
//   get shippingCompany() {
//     return this._shippingCompany;
//   }
//
//   set shippingCompany(arg) {
//     this._shippingCompany = arg;
//   }
//
//   // 추적 번호
//   get trackingNumber() {
//     return this._trackingNumber;
//   }
//
//   set trackingNumber(arg) {
//     this._trackingNumber = arg;
//   }
//
//   get display() {
//     return `${this.shippingCompany} ${this.trackingNumber}`;
//   }
// }

// 배송 클래스
class Shipment {
  get trackingInfo() {
    // info: TrackingInformation.display 인라인
    // return this._trackingInformation.display;
    return `${this.shippingCompany} ${this.trackingNumber}`;
  }

  // info: 삭제하기
  // get trackingInformation() {
  //   return this._trackingInformation;
  // }
  //
  // set trackingInformation(aTrackingInformation) {
  //   this._trackingInformation = aTrackingInformation;
  // }

  // info: 위임함수 만들기
  set shippingCompany(arg) {
    // info: 인라인하기
    // this._trackingInformation.shippingCompany = arg;
    this.shippingCompany = arg;
  }

  get shippingCompany() {
    // info: 인라인하기
    // return this._trackingInformation.shippingCompany;
    return this.shippingCompany;
  }

  // info: 위임함수 만들기
  set trackingNumber(arg) {
    this._trackingInformation.trackingNumber = arg;
  }

  get trackingNumber() {
    this._trackingInformation.trackingNumber;
  }
}

// 클라이언트
const aShipment = new Shipment();
// aShipment.trackingInformation.shippingCompany = request.vendor;
aShipment.shippingCompany = request.vendor;
