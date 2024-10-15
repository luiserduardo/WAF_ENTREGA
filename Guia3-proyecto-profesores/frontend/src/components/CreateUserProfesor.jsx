import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

function CreateUserProfesores({ addProfesores }) {
  const [nombre, setNombre] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCreateProfesores = async (event) => {
    event.preventDefault(); 

    if (!nombre) {
      toast.error("Llenar todos los campos");
      return;
    }

    try {
      // Petición POST al servidor
      const res = await axios.post("http://localhost:3001/api/profesores", {
        nombre,
      });

      // En caso de éxito
      if (res.status === 201) {
        toast.success("Profesor creado");
        addProfesores(res.data);
        setNombre("");
        window.location.reload(); 
      }
    } catch (error) {
      console.error("Error en la creación del profesor: ", error);
      toast.error("Error en la creación del profesor");
    }
  };

  return (
    <div className="container mt-3">
      <h2>Agregar Profesor</h2>
      <form onSubmit={handleCreateProfesores}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ex: John Doe"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          <b>Crear profesor</b>
        </button>
      </form>
    </div>
  );
}

export default CreateUserProfesores;
