/**
 * 다른 클래스로 옮기기
 */
class Account {
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this._dayOverdrawn > 0) {
      // result += this.overdraftCharge;
      // info: 인라인 한다면
      result += this.type.overdraftCharge;
    }
    return result;
  }

  // 초과 인출 이자 계산
  get overdraftCharge() {
    // info: 위임 메서드로 변경
    // if (this.type.isPreminum) {
    //   const baseCharge = 10;
    //   if (this.daysOverdrawn <= 7) {
    //     return baseCharge;
    //   } else {
    //     return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    //   }
    // } else {
    //   return this.daysOverDrawn * 1.75;
    // }
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}


class AccountType {
  // info: 메서드 옮겨온 뒤, 클래스에 맞게 정리
  // 초과 인출 이자 계산
  overdraftCharge(daysOverdrawn) {
    if (this.isPreminum) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverDrawn * 1.75;
    }
  }
}
