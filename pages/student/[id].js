import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '../../Layouts/DefaultLayout'
import  Zoom  from 'react-medium-image-zoom'
const Student = () => {

    const router = useRouter()

    const studentId = router.query.id

    console.log(router.query)

    const [students, setStudents] = useState([])

    useEffect( () => {
      axios.get(`https://fejs-c7-api.herokuapp.com/api/students/${studentId}?populate=*`)
    .then( res => {
      setStudents([...res.data.data])
    })
    })

    return (
        <DefaultLayout>
            <div>
                <h1>Student</h1>
                {students.map((student) => {
          return(
            <div key={student.id}>
                <Zoom>
                  <img src={student.attributes.photo.data.attributes.url} width="200"/>
                </Zoom>
                <ul>
                  <li>First Name: {student.attributes.firstname}</li>
                  <li>Last Name: {student.attributes.lastname}</li>
                  <li>Location: {student.attributes.location}</li>
                </ul>
            </div>
          )
        })}
            </div>
        </DefaultLayout>
       
    )
}

export default Student
