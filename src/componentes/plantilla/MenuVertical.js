import React from 'react';
import CrearProyecto from '../proyectos/CrearProyecto'
import MostrarProyectos from '../proyectos/MostrarProyectos';




function MenuVertical() {
    return (
        <aside className="text-center p-4">
            <h2 className="fst-italic text-black bg-gradient-black mt-1 mb-5">Gestiona tus Proyectos</h2>
            <CrearProyecto/>

            <MostrarProyectos/> 
        </aside>
    )
}

export default MenuVertical;