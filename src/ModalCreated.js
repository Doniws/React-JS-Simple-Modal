import React from 'react'

import "./ModalCreate.css"

function ModalCreated({ setOpenModal }) {
    return (
        <div className='container-modal'>
            <div className='modal-background'>
                <div className='head-modal'>
                    <div className='head-wrap'>
                        <span className='judul-modal'>
                            <h3>Buat Postingan</h3>
                        </span>
                        <span className='icon-wrapper z-10 right-icon' 
                            onClick={() => {
                            setOpenModal(false);
                        }}>
                            <i className="fa-solid fa-xmark" > x </i>
                        </span>
                    </div></div>
                <div className='body-modal'>
                    <div className='make-tweet'>
                        <span className='input-wrap'>
                            <input className='input' placeholder='Apa Yang anda pikirkan ' type='text'></input>
                        </span>
                    </div>
                    <div className='make-img'>
                        <div className='make-img-wrap'>
                            <div className='make-img-space'>
                                <i className="fa-solid fa-image">cccc</i>
                                <span className='icon-wrapper free'>
                                    <i className="fa-solid fa-xmark x"> x </i>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='footer-modal'>
                    <div className='footer-wrap'>
                        <div className='footer-space'>
                            <div className='footer-space-wrap'>
                                <span className='add'>
                                    <p>Tambahakan Teman Anda</p>
                                </span>
                                <div className='icon'>
                                    <span className='icon-wrapper'>
                                        <i className="fa-solid fa-xmark x"> x </i>
                                    </span>
                                    <span className='icon-wrapper'>
                                        <i className="fa-solid fa-xmark x"> x </i>
                                    </span>
                                    <span className='icon-wrapper'>
                                        <i className="fa-solid fa-xmark x"> x </i>
                                    </span>
                                    <span className='icon-wrapper'>
                                        <i className="fa-solid fa-xmark x"> x </i>
                                    </span>
                                    <span className='icon-wrapper'>
                                        <i className="fa-solid fa-xmark x"> x </i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='footer-send'>
                            <span className='send'>
                                <button className='btn-send'>Kirim</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCreated