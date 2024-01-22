import React from 'react'

export default function Fordev() {
  return (
    <div>
      <div className='inside_padding disp'>
        <p className='dd container auth text-center'>FOR DEVELOPERS</p>
        <div className="dd-1 container text-center popp"><b>Integrate OCR into your app</b></div>
        <div className='p_100'>
          <div className="dd container text-center fs-5 text-body-tertiary ">The most accurate OCR technology with deep STEM functionality, including math, chemistry, handwriting, tables, foreign languages, and full PDF document conversion.</div>
        </div>
        <div className="three_btns">
          <div class="p-2"><button type="button" class="btn btn-lg btn-primary">Get Started</button></div>
          <div class="p-2"><button type="button" class="btn btn-lg btn-outline-secondary">Go to docs</button></div>
          <div class="p-2"><button type="button" class="btn btn-lg btn-outline-secondary">API reference</button></div>

          <div className='jst_flex'>
            <img src="https://mathpix.com/images/snip-page/ocr-hero-desktop.webp" width="900" height="432" alt="" />
          </div >
        </div>
      </div>



      {/* 2 */}
      <div className='container disp'>
        <div className='inside_padding'>
          <p className='dd container auth text-center'>FOR ENTERPRISES</p>
          <div className="dd-1 container text-center popp"><b>Secure Conversion Service</b></div>
          <div className="dd container text-center fs-5 text-body-tertiary ">
            <p>Accurately convert large PDF and image libraries into machine readable text files in hours, not months.</p><p>We process millions of pages of unstructured PDFs and images per hour so you get the accurate data needed to train and tune your model fast.</p>
          </div>
          <div className="three_btns">
            <div class="p-2"><button type="button" class="btn btn-lg btn-primary">Get Started</button></div>
            <div class="p-2"><button type="button" class="btn btn-lg btn-outline-secondary">Go to docs</button></div>
            <div class="p-2"><button type="button" class="btn btn-lg btn-outline-secondary">API reference</button></div>
          </div>
        </div>
      </div>
    </div >
  )
}
