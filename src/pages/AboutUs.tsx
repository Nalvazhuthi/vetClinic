import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="header">
                We are Pet.
                <span className='contact'> <span className="icon"></span>+1 (671) 555-0110</span>
            </div>
            <div className="sub-header">Caring Vets, Healthy Pets - Trust Us</div>
            <div className="content-wrapper">
                <div className="card">
                    <div className="image-wrapper">
                        <img src="" alt="" />
                    </div>
                    <div className="details-wrapper">
                        <div className="description">Our veterinary clinic is a compassionate and skilled facility dedicated to providing high-quality medical care for pets.</div>
                        <div className="button">
                            <div>Services</div>
                            <div className='icon'>IC</div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="image-wrapper">
                            <img src="" alt="" />
                        </div>
                        <div className="description">Trust us to be your go-to vet clinic for all your pet's healthcare needs.</div>
                    </div>
                    <div className="card">
                        <div className="image-wrapper">
                            <img src="" alt="" />
                        </div>
                        <div className="svg"></div>
                        <div className="description">Trust us to be your go-to vet clinic for all your pet's healthcare needs.</div>
                        <div className="button">
                            <div>Reviews</div>
                            <div className='icon'>IC</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs