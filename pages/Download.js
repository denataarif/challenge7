import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Download = () => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <div>
      <DefaultLayout>
          <div className='p-4'>
            <h2 style={{textAlign: "center"}}>Download Page</h2>
            <div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                <Viewer
                fileUrl="/ECC (2013).pdf"
                plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          </div>
      </DefaultLayout>
    </div>
  )
}

export default Download
