// **************** Styles ***************
import './VapeCard.css';

const VapeCard = ({ vape, onAdd }) => {
    const { name, price, image, color } = vape;

    const handleAddClick = () => {
        // Aquí puedes llamar a onAdd() pasando el producto a agregar
        alert(`Agregando ${name} al carrito.`);
        onAdd?.(vape); // Llamada opcional a una función onAdd pasada como prop
    };

    return (
        <div className="card" style={{
            backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)`
        }}>
            <div className="vape">
                <div className="image">
                    <img src={image} alt="Vape Image" />
                </div>
                <p className="descripcion">{name} </p>
                <button className="add-button" onClick={handleAddClick}>+</button>
            </div>
            <div className="price">
                <p style={{
                    backgroundColor: color
                }}>${price}</p>
            </div>
        </div>
    );
}

export default VapeCard;