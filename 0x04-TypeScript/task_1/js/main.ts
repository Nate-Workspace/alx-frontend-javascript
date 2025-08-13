interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Task 1
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// Task 2
const director1: Directors = {
  firstName: "Johnathan",
  lastName: "Dobric",
  location: "Los Angeles",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3
function printTeacher({ firstName, lastName }: printTeacherFunction): string {
  return `${firstName}. ${lastName}`
}

console.log(printTeacher({firstName: 'john', lastName:'Doe'}));

// Task 4
class StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.lastName;
  }
}

const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());
console.log(student1.workOnHomework());
