import "./MainVapeCard.css"

const MainVapeCard = ({vape}) => {
    const { name, image, price, brand, color } = vape;
    return (
        <div className="main-card" data-color={color}>
            <div className="main-text">
                <p className="main-price" style={{
                    color
                }}>${price}</p>
                <div className="main-rating">

                </div>
                <p className="main-brand">IPLAY</p>
            </div>
            <div className="main-image">
                <img src={image} alt={`${name} Vape Image`}/>
            </div>
        </div>        
    )
}

export default MainVapeCard
