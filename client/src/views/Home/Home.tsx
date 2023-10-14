

function Home() {

  const tareas = [
    {
      name: 'Tarea 1',
      description: 'Descripcion de la tarea 1',
      status: 'En progreso',
      priority: 'Alta'
    },
    {
      name: 'Tarea 2',
      description: 'Descripcion de la tarea 2',
      status: 'En progreso',
      priority: 'Alta'
    },
    {
      name: 'Tarea 3',
      description: 'Descripcion de la tarea 3',
      status: 'En progreso',
      priority: 'Alta'
    }
  ] 
    
  return (
    <>
      {
        tareas.map((tarea, index) => {
          return (
            <div key={index}>
              <h1>{tarea.name}</h1>
              <p>{tarea.description}</p>
              <p>{tarea.status}</p>
              <p>{tarea.priority}</p>
            </div>
          )
        })
      }    
    </>
  )
}

export default Home