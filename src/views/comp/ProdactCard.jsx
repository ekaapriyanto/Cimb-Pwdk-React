import React from 'react'

const ProductCard = (props) => {
    const { productData } = props;
    const {author, title, review, desc, price, discount, image, stock } = productData;

    return (
        <div className="row mt-5">
            <div className="col-6">
            <img src = {image} width="190px" height="300px"/>
            </div>
            <div className="col-6" style={{
            width:"300px",
            padding: "1px",
            textAlign: "left"
        }}>
            <p>{author}<br/><h3>{title}</h3>{review}/5 review</p>
            <p style={{fontSize: "15"}}>{desc}</p>
            {discount > 0 ? (
            <h4>
                <h4 style={{fontSize:"17"}}>Discount {discount}%</h4>
                <p className="row">
                <h4 style={{color: "grey", textDecorationLine:"line-through"}}>${price}</h4><h4>&nbsp; ${ (price - price * (discount /100)).toFixed(2) }</h4>
                </p>
            </h4>
            ) : <h3>${price}</h3>
            }
            {stock > 0 ?(
                <div style={{textAlign: "center"}}>
                <input className="btn-primary" type="button" value="Buy Now!" style={{width: "150px", height: "50px"}}/>
            </div>
            ) : <div style={{textAlign: "center"}}>
            <input type="button" value="Buy Now!" disabled style={{width: "150px", height: "50px"}}/>
        </div>}
        </div>
        </div>
    )
}
export default ProductCard;