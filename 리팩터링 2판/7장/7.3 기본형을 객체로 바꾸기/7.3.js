/**
 * 예시
 * 레코드 구조에서 데이터를 읽어 들이는 주문 클래스
 */
class Order {
  constructor(data) {
    this._priority = data.priority;
    this._data = data;
    // ... 나머지 초기화 코드 생략
  }

  // info: 변수 캡슐화
  // get priority() {
  // info: 메서드명 명확하게 변경
  get priorityString() {
    // return this._priority;
    // info: Priority 클래스를 사용하도록 접근자 수정
    return this._priority.toString();
  }

  // info: 변수 캡슐화
  set priority(aString) {
    // this._priority = aString;
    // info: Priority 클래스를 사용하도록 접근자 수정
    this._priority = new Priority(aString);
  }
}

// info: 우선순위 속성을 표현하는 값 클래스 Priority 생성
class Priority {
  constructor(value) {
    this._value = value;
  }

  toString() {
    return this._value.;
  }
}

// 클라이언트
const orders = [new Order()];
// info: 메서드명 명확하게 변경된 것 호출
const highPriorityCount = orders.filter(o => 'high' === o.priorityString || 'rush' === o.priorityString).length;
