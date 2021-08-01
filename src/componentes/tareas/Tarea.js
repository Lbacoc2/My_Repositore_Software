import React from 'react'

const Tarea = ({tarea}) => {
    return(
        <tr>
            <td>{tarea.nombre}</td>
            <td>{tarea.estado
                  ?(<button className="btn btn-success">Completada</button>)
                  :(<button className="btn btn-warning">Incompletada</button>)}</td>
            
        </tr>
    )
}

export default Tarea