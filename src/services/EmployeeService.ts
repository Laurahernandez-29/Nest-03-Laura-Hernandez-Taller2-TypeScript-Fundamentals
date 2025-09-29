import { BaseEmployee} from "../classes/BaseEmployee";
import { Developer} from "../classes/Developer";
import { Manager} from "../classes/Manager";
import { ApiService } from "./Apiservice";
import type { User} from "../interface/types";

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
        const dev11 = new Developer(1, users[0].name, users[0].age);
        const dev22 = new Developer(2, users[1].name, users[1].age);
        const manager = new Manager(3, users[2].name, users[2].age, users[2].email);

        this.employees.push(dev11, dev22, manager);
      } else {
        console.warn("No hay suficientes usuarios para crear empleados.");
      }
    } catch (error) {
      console.error("Error al cargar empleados desde la API:", error);
      throw error;
    }
  }
     }

     getEmployeeById(id: number): BaseEmployee | undefined {
       // TODO: Buscar empleado por ID
     }

     getAllEmployees(): BaseEmployee[] {
       // TODO: Retornar todos los empleados
     }

     addEmployee(employee: BaseEmployee): void {
       // TODO: Agregar nuevo empleado
     }
   }