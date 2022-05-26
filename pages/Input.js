import React,{ useRef } from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import axios from 'axios'
import { useDropzone } from 'react-dropzone'

const Input = () => {
    /*
        Hook useRef akan membuat const menjadi
        inputFirstName = {
            current=initial value yang ada di dalam kurung useRef
        }
    */ 
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    const inputFirstName = useRef()
    const inputLastName = useRef()
    const inputLocation = useRef()
    const inputImg = useRef()

    const formSubmitHandler = async (event) => {
        //menghentikan reload saat tombol di tekan
        event.preventDefault()
        const data ={
            firstname: inputFirstName.current.value,
            lastname: inputLastName.current.value,
            location: inputLocation.current.value,
        }

        // Membuat object formData yg nanti akan di kirim ke API
        const formData = new FormData();
        // Mengisi formData dengan menggunakan append
        formData.append('data', JSON.stringify(data))
        // Memasukan photo ke formData
        acceptedFiles.forEach( file => {
            formData.append('files.photo', file, file.path)
        } )

        const res = await axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
        console.log(res.data)

    }

  return (
      <DefaultLayout>
          <div>
            <form onSubmit={formSubmitHandler}>
                <div className='card w-50' >
                    <div className="input-group">
                        <div className='row'>
                            <div className='col-6'>
                                <label className='form-label'>First Name</label>
                                <input className='form-control' type="text" name="firstname" id="firstname" ref={inputFirstName} />
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Last Name</label>
                                <input className='form-control'  type="text" name="lastname" id="lastname" ref={inputLastName} />
                            </div>
                            <div className='col-12'>
                                <label className='form-label'>Location</label>
                                <input className='form-control' type="text" name="location" id="location" ref={inputLocation} />
                            </div>
                            <div className='col-12'>
                                <label className='form-label'>Photo</label>
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>Drag and drop some files here, or click to select files</p>
                                </div>
                                <ul>{files}</ul>
                            </div>
                            <div className='col-12'>
                                <input type="submit" value="SUBMIT FORM"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
          </div>
      </DefaultLayout>
    
  )
}

export default Input
