import './style.css';
import { ApiService} from './services/Apiservice';
import { EmployeeService } from './services/EmployeeService';


 // main.ts - Punto de entrada de la aplicación
   async function main(): Promise<void> {
     try {
       // TODO: Crear instancias de los servicios (inyección de dependencias)
       const apiService = new ApiService();
       const employeeService = new EmployeeService(apiService);

       // TODO: Cargar empleados desde la API
       await employeeService.loadEmployeesFromApi();

       // TODO: Mostrar información de todos los empleados
       const employees = employeeService.getAllEmployees();

       console.log("=== SISTEMA DE EMPLEADOS ===");
       // TODO: Mostrar detalles y salarios de cada empleado
     } catch (error) {
       console.error("Error:", error);
     }
   }


