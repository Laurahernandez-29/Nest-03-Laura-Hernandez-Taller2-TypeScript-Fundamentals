import type { User, Department} from "../interface/types";
import { BaseEmployee } from "./BaseEmployee";

export class Manager extends BaseEmployee {
     private teamSize: number;

     constructor(user: User, id: number, department: Department, teamSize: number) {
       // TODO: Implementar
       super(user,id,department);
       this.teamSize = teamSize;
     }

     getDetails(): string {
       // TODO: Retornar información del manager
       return `Manager : ${this.name}, Departamento: ${this.department}, ${this.name}, Email: ${this.email}, Equipo: ${this.teamSize}personas`;
     }

     calculateSalary(): number {
       // TODO: Salario base 4000 + 300 por cada miembro del equipo
       const baseSalary = 4000;
       const bonus = 300 * this.teamSize;
       return baseSalary + bonus;
     }
   }