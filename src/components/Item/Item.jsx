import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='tarjetaProd'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Producto: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>Id: {id} </p>
       
        <Link className='button' to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item