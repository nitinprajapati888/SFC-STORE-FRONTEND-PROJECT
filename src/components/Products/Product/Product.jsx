import "./Product.scss";
import Prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={Prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    );
};

export default Product;
