import React from 'react'
import Header from '../plantilla/Header'
import MenuVertical from '../plantilla/MenuVertical'
import FormularioTarea from '../tareas/FormularioTarea'
import MostrarTarea from '../tareas/MostrarTareas'


const Proyectos = () => {
    return (
        <div className="container-fluid">
        <div className="row min-vh-100 text-white">
            <div className="col-md-3 bg-secondary bg-gradient m-0 p-0">
                <MenuVertical/>

            </div>
            <div className="col-md-9 bg-gradient m-0 p-0">
                <Header/>

                <main>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <FormularioTarea/>
                        </div>
                    </div>
                    <div className="text-center mt-5 bg-light text-dark">
                        <MostrarTarea/>
                    </div>
                </main>        
            </div>
        </div>
    </div>    
    )
}

export default Proyectos