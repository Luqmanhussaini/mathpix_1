import React from 'react'

export default function Intro() {
    return (
        <>
            <div class="d-flex  justify-content-evenly hole">
                <div class="p-2 sidebox">
                    <div class="d-flex flex-column mb-3">
                        <div class="p-2  fw-semibold ai_head">AI-powered document automation</div>
                        <div class="p-2 fs-5 text-body-tertiary text_inner">Quickly and accurately convert PDFs and images to searchable, exportable, and machine readable text.</div>
                        <div class="p-2">
                        <div class=" buton d-flex flex-row mb-2">
                        <div class="p-2"><button type="button" class="btn btn-lg btn-primary">Try for free</button></div>
                        <div class="p-2"><button type="button" class="btn btn-lg btn-outline-secondary">View pricing</button></div>

                            </div>
                        </div>
                    </div>
                </div>



                <div class="p-2 img_class">
                    <img id="intro_img" src="https://mathpix.com/images/snip-page/home-page-hero.webp" alt="" />
                </div>


            </div>
        </>
    )
}
