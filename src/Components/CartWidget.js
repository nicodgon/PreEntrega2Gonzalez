import cartIcon from '../assets/imagenes/cart-4-svgrepo-com.svg'

export default function CartWidget () {
    const contador= 0
    return(
        <div className='cart__icon'>
            <img src={cartIcon} alt="cart" style={{width:"3em"}} />
            <span>{contador}</span>
        </div>
    )
}