import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const elCarrito = './carrito-de-compras.png';

  return (
    <div>
      <Link style={{textDecoration:"none"}} to='/cart'>
        <img className='elCarrito' src={elCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className="carritoP"> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget