import "./SeachBar.css";

const SeachBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Buscar"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="categories">
                <div className="category">
                    Marca
                </div>
                <div className="category">
                    Sabor
                </div>
                <div className="category">
                    Hits
                </div>
                <div className="category">
                    Recargable
                </div>
            </div>
        </div>
    )
}

export default SeachBar
