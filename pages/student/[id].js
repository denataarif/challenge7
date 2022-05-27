import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '../../Layouts/DefaultLayout'
import  Zoom  from 'react-medium-image-zoom'
import axios from 'axios'

const Student = () => {

    const router = useRouter()

    // const {studentId} = router.query.id

    console.log(router.query)

    const [students, setStudents] = useState([])

    useEffect( () => {
      axios.get(` https://fejs-c7-api.herokuapp.com/api/students/${router.query.id}?populate=*`)
    .then( res => {
      setStudents([res.data.data])
    })
    })

    return (
        <DefaultLayout>
            <div className='justify-content-center'>
          {students.map((student) => {
            return(
              <div key={student.id} style={{width:'300px'}} className="m-5">
                    <div  >
                    { student.attributes.photo.data !== null &&
                          <Zoom>
                            <img className="card-img-top rounded"src={student.attributes.photo.data.attributes.url} style={{width:"300px", height:"400px", border:"white"}} />
                          </Zoom>
                        }
                        <div className="card-body">
                          <p className="card-text">First Name: {student.attributes.firstname}</p>
                          <p className="card-text">Last Name: {student.attributes.lastname}</p>
                          <p className="card-text">Location: {student.attributes.location}</p>
                        </div>
                  </div>
                </div>
            )
        })}
        </div>
        </DefaultLayout>
    )
}

export default Student
