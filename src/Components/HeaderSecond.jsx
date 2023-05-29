import React from 'react'

const HeaderSecond = ({title, image, children}) => {
  return (
    <header className='header'>
        <div className="header__container">
            <div className="header__container-background">
            <div className="header__container-image">
                <img src={image} alt="background header image" />
            </div>
            <div className="header__container-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderSecond