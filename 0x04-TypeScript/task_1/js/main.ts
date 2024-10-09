// teacher.ts

class Teacher {
  private firstName: string;
  private lastName: string;
  private location: string;

  constructor(firstName: string, lastName: string, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }

  get firstName(): string {
    return this.firstName;
  }

  get lastName(): string {
    return this.lastName;
  }

  get location(): string {
    return this.location;
  }

  set firstName(value: string) {
    this.firstName = value;
  }

  set lastName(value: string) {
    this.lastName = value;
  }

  set location(value: string) {
    this.location = value;
  }

  // Method to add optional properties
  addProperty(key: string, value: any): void {
    this[key] = value;
  }

  // Method to get optional properties
  getProperty(key: string): any {
    return this[key];
  }
}

// FullTimeTeacher subclass
class FullTimeEmployee extends Teacher {
  private fullTimeEmployee: boolean;

  constructor(firstName: string, lastName: string, location: string) {
    super(firstName, lastName, location);
    this.fullTimeEmployee = true;
  }

  get fullTimeEmployee(): boolean {
    return this.fullTimeEmployee;
  }

  set fullTimeEmployee(value: boolean) {
    this.fullTimeEmployee = value;
  }
}

// Dynamic property support using Proxy
const handler = {
  get(target: any, prop: string, receiver: any): any {
    if (prop in target) {
      return target[prop];
    } else {
      return undefined;
    }
  },
  set(target: any, prop: string, value: any, receiver: any): boolean {
    if (prop === 'firstName' || prop === 'lastName' || prop === 'location') {
      return false;
    }
    target[prop] = value;
    return true;
  }
};

function createDynamicTeacher(...args: any[]): Teacher & { [key: string]: any } {
  const teacher = new (FullTimeEmployee as any)(...args);
  return new Proxy(teacher, handler);
}
