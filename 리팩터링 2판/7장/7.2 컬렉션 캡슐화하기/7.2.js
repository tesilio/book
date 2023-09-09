/**
 * 예시
 * 수업 목록을 필드로 지니고 이:ㅆ는 Person 클래스
 */
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  // info: 메서드를 사용하지 않으면 아무도 사용하지 못하게 하려면 여기서 복제본 제공
  get courses() {
    // return this._courses;
    return this._courses.slice();
  }

  // info: 사용할 이유가 없어졌기 때문에 삭제! 만약 세터를 제공해야할 이유가 있다면 복제본을 필드에 저장
  set courses(aList) {
    // this._courses = aList;
    this._courses = aList.slice();
  }

  // info: 수업을 하나씩 추가하는 메서드
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  // info: 수업을 제거하는 메서드
  removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) {
      fnIfAbsent();
    } else {
      this._courses.splice(index, 1);
    }
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

// 클라이언트
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

const aPerson = new Person('김세현');
for (const name of readBasicCourseNames(filename)) {
  // aPerson.courses.push(new Course(name, false));
  // info: 클래스의 메서드를 사용하도록 변경
  aPerson.addCourse(new Course(name, false));

}

