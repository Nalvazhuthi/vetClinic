import React from 'react'
import { ButtonArrow } from '../assets/svg/exportSvg'
import Button from '../component/Button'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contact-wrapper">
                <div className="contact-details">
                    <div className="details-wrapper">
                        <div className="header">Would you like us to contact you?</div>
                        <div className="sub-header">We’re always in touch</div>
                    </div>
                    <div className="email-wrapper">
                        <div className="email">pet.clinic@gmail.com</div>
                        <div className="icon">
                            <ButtonArrow />
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <input type="text" placeholder='Your Name' />
                    <input type="number" placeholder='Your Number' />
                    <input type="text" placeholder='Type of your Pet' />
                    <input type="text" placeholder='What time should I call you?' />
                    <div className="btn-wrapper">
                        <Button label='Send' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact