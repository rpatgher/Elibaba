
// **************** Styles ***************
import './VapeCard.css';

const VapeCard = ({vape}) => {
    const { name, price, image, color } = vape;
    return (
        <div className="card" style={{
            backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)`
        }}>
            <div className="vape">
                <div className="image">
                    <img src={image} alt="Vape Image" />
                </div>
                <p className="descripcion">{name}</p>
            </div>
            <div className="price">
                <p style={{
                    backgroundColor: color
                }}>${price}</p>
            </div>
        </div>
    )
}

export default VapeCard
