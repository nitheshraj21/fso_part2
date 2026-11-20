const Course = ({courses}) => {
 
  return (
    <div>
      {courses.map(course => {
        const exercises = course.parts.reduce((accumulator,part) => {
                 return accumulator + part.exercises;
        },0)

        return (
        <div key={course.id}>
          <h1>{course.name}</h1>
           
           {course.parts.map(part =>{

              return (
                  <p key ={part.id}>{part.name} {part.exercises}</p>
              )
           })}
   
        
          <h3>total of {exercises} exercises</h3>
        </div>
         )
         
      })

      }
    </div>
  )
}

export default Course