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

  // info: 더 가다듬기 - 객체 자체를 반환하는게 낫다는 판단
  get priority() {
    return this._priority;
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
    // this._value = value;
    // info: 더 가다듬기 - Priority 클래스의 유용성을 감안하여 Order의 세터가 Priority 인스턴스를 받도록 변경
    if (value instanceof Priority) {
      return value; // todo: 아무것도 반환이 안되는데 왜 이렇게 작성한 것인지 모르겠다.
    }
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
  }

  toString() {
    return this._value;
  }

  // info: 더 가다듬기
  get _index() {
    return Priority.legalValues().findIndex(s => s === this._value);
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}

// 클라이언트
const orders = [new Order()];
// info: 메서드명 명확하게 변경된 것 호출
// const highPriorityCount = orders.filter(o => 'high' === o.priorityString || 'rush' === o.priorityString).length;
// info: 더 가다듬기 Order 클래스에서 Priority 객체를 받아서 처리
// const highPriorityCount = orders.filter(o => 'high' === o.priority.toString() || 'rush' === o.priority.toString()).length;
// info: 더 가다듬기 Order 클래스에서 Priority 객체를 받아서 처리2 -> 지려따!!!!!
const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority('normal'))).length;
