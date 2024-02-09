"use client"

import { useState } from 'react'
import close from '@/assets/close.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false)
    const router = useRouter()


    const toggleModal = () => {
        setModal(!modal)
    }

    const navigateToProjectDetailPage = ()=>{
        setModal(!modal)
        router.push(`project/${title}`)
    }

    return (

        <>
            <div className="portfolio_item">

                <Image
                    src={img}
                    alt={`${title} image`}
                    className='portfolio_img'
                    width={"auto"}
                    height={"auto"}
                />

                <div className="portfolio_hover" onClick={toggleModal}>
                    <h3>{title}</h3>
                </div>

            </div>

            {modal && (
                <div className="portfolio_modal">
                    <div className="portfolio_modal-content">
                        <Image
                            src={close}
                            alt=""
                            className='modal_close'
                            onClick={toggleModal}
                            width={"auto"}
                            height={"auto"}
                        />

                        <h3>{title}</h3>

                        <ul className="grid">
                            {
                                details.map(({ icon, title, desc }, index) => (
                                    <li key={index}>
                                        <span className="item_icon">{icon}</span>

                                        <div>
                                            <span className="item_title">{title}</span>
                                            <span className="item_details">{desc}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>


                        <div className='modal_item'>
                            <Image
                                src={img}
                                alt="cover image"
                                className="modal_img"
                            />
                            <div className="modal_hover">
                                <button 
                                    onClick={navigateToProjectDetailPage} 
                                    className="modal_hover_button">
                                    view more details
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default PortfolioItem