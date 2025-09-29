import { Department, type User} from "../interface/types";
import { BaseEmployee } from "./BaseEmployee";

export class Developer extends BaseEmployee {
     private programmingLanguages: string[];

     constructor(user: User, id: number, languages: string[]) {
       // TODO: Implementar - siempre será del departamento IT
       super(user,id,Department.IT);
       this.programmingLanguages = languages;
     }

     getDetails(): string {
       // TODO: Retornar información del desarrollador
       return `Developer: ${this.name}, Edad: ${this.age}, Email: ${this.email}, Departamento: ${this.department}, Salario: $${this.calculateSalary()}`;
}
     

     calculateSalary(): number {
       // TODO: Salario base 3000 + 200 por cada lenguaje
       const baseSalary = 3000;
       const bonusLanguage = 200;
       return baseSalary + this.programmingLanguages.length * bonusLanguage;
     }
  }
