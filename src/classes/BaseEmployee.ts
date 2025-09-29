import type { User, Department} from "../interface/types";

export abstract class BaseEmployee {
     protected id: number;
     protected name: string;
     protected age: number;
     protected email: string;
     protected gender: string;
     protected department: Department;

     constructor(user: User, id: number, department: Department) {
       // TODO: Implementar constructor
       (user);
       this.id =id;
       this.department =department;
       this.name =user.name;
       this.age =user.age;
       this.email =user.email;
       this.gender =user.gender;

     }

     abstract getDetails(): string;
     abstract calculateSalary(): number;
   }