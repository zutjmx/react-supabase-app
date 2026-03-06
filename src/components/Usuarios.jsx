import { useEffect, useState } from "react";
import { getUsuarios } from "../services/SupabaseService";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {     
        fetchUsuarios();        
    }, []);

    const fetchUsuarios = async () => {
        const data = await getUsuarios();            
        setUsuarios(data);
    }

    return (
        <div className="container">            
            <div className="card">                
                <div className="card-body">
                    <h5 className="card-title">Usuarios</h5>
                    <p className="card-text">Lista de usuarios</p>                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
