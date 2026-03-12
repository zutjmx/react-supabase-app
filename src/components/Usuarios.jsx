import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { getUsuarios } from "../services/SupabaseService";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {     
        fetchUsuarios();        
    }, []);

    const fetchUsuarios = async () => {
        try {
            Swal.fire({
                title: 'Cargando usuarios...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const data = await getUsuarios();
            setUsuarios(data);
            
            Swal.close();
        } catch (error) {
            console.error("Error fetching usuarios:", error);
            Swal.fire("Error", "Failed to fetch usuarios", "error");
        }
    };

    // Función para formatear fechas en formato legible
    const formatearFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });
    };

    return (
        <div className="container">            
            <div className="card">                
                <div className="card-body">
                    <h5 className="card-title">Usuarios</h5>
                    <p className="card-text">Lista de usuarios</p>                    
                    <table className="table table-sm table-bordered table-hover table-primary">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Paterno</th>
                                <th>Materno</th>
                                <th>Correo</th>
                                <th>Nombre de usuario</th>
                                <th>Creado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.paterno}</td>
                                    <td>{usuario.materno}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.username}</td>
                                    <td>{formatearFecha(usuario.created_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
