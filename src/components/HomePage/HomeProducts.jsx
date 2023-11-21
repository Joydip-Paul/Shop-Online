import React, { useEffect, useState } from 'react'

export const HomeProducts = () => {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true);

    console.log("ARRAY", product);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const res = await fetch('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts');
        const productData = await res.json();
        setProduct(productData.data);
        console.log("HELLO", productData.data);
    };


    return (
        <section class="food-list">
            <div class="container">
                <div class="row">
                    {/* {JSON.stringify(product)} */}
                    {
                        product.map((item) => (
                            <>
                                <div class="col-xl-3 col-md-4 col-sm-6 pb-30 pb-3">
                                    <div class="food-list__each" key={item.id} to={`/item/${item.id}`}>
                                        <div>
                                            <figure>
                                                <img src={item?.productImageUrl} alt="" />
                                            </figure>
                                            <div class="content">
                                                <h3>{item.productName}</h3>
                                                <div class="content-bottom">
                                                    <h4>
                                                        <p>PRICE</p> <span>BDT {item.productPrice}</span>
                                                    </h4>
                                                    <button>Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
