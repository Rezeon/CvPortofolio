import { pdfjs } from 'react-pdf';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import bootstrap from '../assets/pdf/bootsrap.pdf'
import css from '../assets/pdf/css.pdf'
import git from '../assets/pdf/git.pdf'
import html from '../assets/pdf/Html.pdf'
import javascrptansy from '../assets/pdf/java ansy.pdf'
import javascrptdom from '../assets/pdf/java dom.pdf'
import javascript from '../assets/pdf/javascript.pdf'
import laravel from '../assets/pdf/laravel.pdf'
import php from '../assets/pdf/php.pdf'
import phpsql from '../assets/pdf/php&mysql.pdf'
import reactjs from '../assets/pdf/react js.pdf'
import vuejs from '../assets/pdf/vue js.pdf'
import '../style/SertivCv.css'
pdfjs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.min.js');

function SertivCv () {
    return(
        <div>
            <div className="judul">Sertifikat</div>
            <div className="all">
                <div className='pdfv'>
                    <Viewer fileUrl={bootstrap}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={css}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={git}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={html}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascrptansy}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascrptdom}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={javascript}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={laravel}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={php}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={phpsql}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={reactjs}  defaultScale={0.7} />
                </div>
                <div className='pdfv'>
                    <Viewer fileUrl={vuejs}  defaultScale={0.7} />
                </div>
            </div>
        </div>
    )
}

export default SertivCv;
