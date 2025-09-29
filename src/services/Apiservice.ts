import type { User} from "../interface/types";

export class ApiService {
     private apiUrl = "https://dummyjson.com/users";

       async getUsers(): Promise<User[]> {
       // TODO: Hacer fetch a la API y mapear solo name, age, email, gender
       // Usar try-catch para manejo de errores
       try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const users: User[] = json.users.map((user: any) => ({
        name: user.firstName + " " + user.lastName,
        age: user.age,
        email: user.email,
        gender: user.gender,
        }));

        return users;
        } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
       }
       
      async getUserById(id: number): Promise<User | null> {
      try {
      const response = await fetch(`${this.apiUrl}/${id}`);

      if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Usuario con ID ${id} no encontrado.`);
        return null;
      }
      throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
    }

      const user = await response.json();

      return {
      name: `${user.firstName} ${user.lastName}`,
      age: user.age,
      email: user.email,
      gender: user.gender,
    };
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error);
    throw error;
  }
}
}

