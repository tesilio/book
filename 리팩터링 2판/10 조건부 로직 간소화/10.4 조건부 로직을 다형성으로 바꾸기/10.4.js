/**
 * 예시: 새의 종에 따른 비행 속도와 깃털 상태 알려주는 프로그램
 */
function plumages(birds) {
  // return new Map(birds.map(b => [b.name, plumage(b)]));
  return new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.plumage])); // info: 7. 변경한 코드 적용
}

function speeds(birds) {
  // return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
  return new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.airSpeedVelocity])); // info: 7. 변경한 코드 적용
}

// info: 7. 변경한 코드 적용
// function plumage(bird) { // 깃털 상태
//   // switch (bird) {
//   //   case '유럽 제비':
//   //     return '보통이다';
//   //   case '아프리카 제비':
//   //     return (bird.numberOfCoconets > 2) ? '지쳤다' : '보통이다';
//   //   case '노르웨이 파랑 앵무':
//   //     return (bird.voltage > 100) ? '그을렸다' : '예쁘다';
//   //   default:
//   //     return '알 수 없다';
//   // }
//   // return new Bird(bird).plumage; // info: 1. Bird 클래스 만들기(여러 함수를 클래스로 묶기)
//   return createBird(bird).plumage; // info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
// }
//
// function airSpeedVelocity(bird) { // 비행 속도
//   // switch (bird) {
//   //   case '유럽 제비':
//   //     return 35;
//   //   case '아프리카 제비':
//   //     return 40 - 2 * bird.numberOfCoconuts;
//   //   case '노르웨이 파랑 앵무':
//   //     return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
//   //   default:
//   //     return null;
//   // }
//   // return new Bird(bird).airSpeedVelocity; // info: 1. Bird 클래스 만들기(여러 함수를 클래스로 묶기)
//   return createBird(bird).airSpeedVelocity; // info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
// }

// info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
function createBird(bird) {
  switch (this.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

// info: 1. Bird 클래스 만들기(여러 함수를 클래스로 묶기)
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    // switch (this.type) {
    //   case '유럽 제비':
    //     // return '보통이다';
    //     throw '오류 발생' // info: 3. switch문의 절 오버라이드
    //   case '아프리카 제비':
    //     // return (bird.numberOfCoconets > 2) ? '지쳤다' : '보통이다';
    //     throw '오류 발생' // info: 3. switch문의 절 오버라이드
    //   case '노르웨이 파랑 앵무':
    //     // return (bird.voltage > 100) ? '그을렸다' : '예쁘다';
    //     throw '오류 발생' // info: 3. switch문의 절 오버라이드
    //   default:
    //     return '알 수 없다';
    // }
    return '알 수 없다'; // info: 4. 기본 동작용 조건만 남겨둠
  }

  get airSpeedVelocity() {
    // switch (this.type) {
    //   case '유럽 제비':
    //     // return 35;
    //     throw '오류 발생'; // info: 5. switch문의 절 오버라이드
    //   case '아프리카 제비':
    //     // return 40 - 2 * bird.numberOfCoconuts;
    //     throw '오류 발생'; // info: 5. switch문의 절 오버라이드
    //   case '노르웨이 파랑 앵무':
    //     // return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
    //     throw '오류 발생'; // info: 5. switch문의 절 오버라이드
    //   default:
    //     return null;
    // }
    return null; // info: 6. 기본 동작용 조건만 남겨둠
  }
}

// info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
class EuropeanSwallow extends Bird {
  // info: 3. switch문의 절 오버라이드
  get plumage() {
    return '보통이다';
  }

  // info: 5. switch문의 절 오버라이드
  get airSpeedVelocity() {
    return 35;
  }
}

// info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
class AfricanSwallow extends Bird {
  // info: 3. switch문의 절 오버라이드
  get plumage() {
    return (this.numberOfCoconets > 2) ? '지쳤다' : '보통이다';
  }

  // info: 5. switch문의 절 오버라이드
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

// info: 2. 새 종별 서브클래스 만든 후, 팩터리 함수를 사용하도록 수정
class NorwegianBlueParrot extends Bird {
  // info: 3. switch문의 절 오버라이드
  get plumage() {
    return (this.voltage > 100) ? '그을렸다' : '예쁘다';
  }

  // info: 5. switch문의 절 오버라이드
  get airSpeedVelocity() {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10;
  }
}
