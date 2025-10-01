import { BaseEmployee} from "../classes/BaseEmployee";
import { Developer} from "../classes/Developer";
import { Manager} from "../classes/Manager";
import { ApiService } from "./Apiservice";
import { Department, type User } from "../interface/types";


export class EmployeeService {
     private employees: BaseEmployee[] = [];

     constructor(private apiService: ApiService) {
       // TODO: Inyectar ApiService
     }

     async loadEmployeesFromApi(): Promise<void> {
       // TODO: Cargar usuarios desde API y convertir algunos a empleados
       // Crear 2 developers y 1 manager usando los datos de la API
        try {
      const users: User[] = await this.apiService.getUsers();

      if (users.length >= 3) {
        const dev1 = new Developer(users[0], users[0].age, ["TypeScript"]);
        const dev2 = new Developer(users[1], users[1].age, ["JavaScript"]);
        const manager = new Manager(users[2], users[2].age, Department.IT, 5);

        this.employees.push(dev1, dev2, manager);
      } else {
        console.warn("No hay suficientes usuarios para crear empleados.");
      }
    } catch (error) {
      console.error("Error al cargar empleados desde la API:", error);
      throw error;
    }
  }
     

     getEmployeeById(id: number): BaseEmployee | undefined {
       // TODO: Buscar empleado por ID
       return this.employees.find(emp => emp.getId() === id);
     }

     getAllEmployees(): BaseEmployee[] {
       // TODO: Retornar todos los empleados
       return this.employees;
     }

     addEmployee(employee: BaseEmployee): void {
       // TODO: Agregar nuevo empleado
       this.employees.push(employee);
     }
   }