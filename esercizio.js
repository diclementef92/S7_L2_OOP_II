window.onload = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // this.name + " è più vecchio di " + p1.name
    olderThan(p1) {
      if (this.age > p1.age) {
        return true;
      }
      return false;
    }
  }

  let p1 = new Person("francesco", 30);
  let p2 = new Person("andrea", 20);
  let p3 = new Person("luca", 18);

  if (p1.olderThan(p2)) {
    console.log(p1.name, "è più grande di", p2.name);
  } else {
    console.log(p2.name, "è più grande di", p1.name);
  }
  if (p2.olderThan(p3)) {
    console.log(p2.name, "è più grande di", p3.name);
  } else {
    console.log(p3.name, "è più grande di", p2.name);
  }
  if (p1.olderThan(p3)) {
    console.log(p1.name, "è più grande di", p3.name);
  } else {
    console.log(p3.name, "è più grande di", p1.name);
  }
};
