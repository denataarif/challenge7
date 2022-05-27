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

        let formIsCompleted = false

        // Sanitasi & Validasi
        if( inputFirstName.current.value !== " " && inputLastName.current.value !== " " 
        && inputLocation.current.value !== " " && acceptedFiles.length > 0){
            formIsCompleted = true
        }

        if( formIsCompleted ){
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
        }else{
            console.error('Form Tidak Lengkap')
        }
    }

  return (
      <DefaultLayout>
          <div className="d-flex justify-content-center m-5">
            <form onSubmit={formSubmitHandler}>
                <div className='card w-50 p-3 m-auto' >
                    <div className="">
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
                                <div {...getRootProps({className: 'dropzone border rounded w-100 h-100 bg-secondary bg-opacity-50'})}>
                                    <div className='d-flex align-items-center justify-content-center align-self-center'>
                                        <input {...getInputProps()} />
                                        <p className=''>Drag and drop some files here, or click to select files</p>
                                    </div>
                                </div>
                                <ul>{files}</ul>
                            </div>
                            <div className='d-grid gap-2 col-12 mx-auto mt-5'>
                                <input type="submit" value="SUBMIT FORM" className='btn btn-primary '/>
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
