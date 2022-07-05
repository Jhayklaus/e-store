import React from 'react'
import deliver from '../images/deliver-preview.png'
import goods from '../images/goods-preview.png'
import Buttons from './Buttons'
import { NavLink } from 'react-router-dom'

const Offers = () => {
  return (
    <>
        <div className='OffersCategory'>

            <div className='offer offerA'>
                <div className='offer1'>
                    <p className='title'>Free Delivery</p>
                    <h1>Free Delivery over $50</h1>
                    <p className='descr'>Shop $50 product and get free delivery anywhere.</p>
                    <NavLink className='link' to='/products'>
                    <Buttons text="Shop Now" color="#fe9e0f"/>
                    </NavLink>
                </div>
                <img src={deliver} />
            </div>

            <div className='offer offerB'>
                <div className='offer2'>
                    <p className='title'>60% off</p>
                    <h1>Welcome Bonus!</h1>
                    <p className='descr'>Save up to 60% off on your first order</p>
                    <NavLink className='link' to='/products'>
                    <Buttons text="Claim Now " color="#3352ec"/>
                    </NavLink>
                </div>
                <img src={goods} />
            </div>

        </div>
    </>
  )
}

export default Offers
