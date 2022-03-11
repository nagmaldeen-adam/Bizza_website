import {Productcontainer,
Productheading,
Productwraper,
Productcard,
Productimg,
Productinfo,
Productname,
ProductimgContainer,
Productdesc,
Productprice,
Productbutton
} from './productElement.js';
import {productData} from './data.js';
 const Product =({heading,data})=>{
  return(
      <Productcontainer>
        <Productheading>{heading}</Productheading>
        <Productwraper>
        {productData.map( (product,index) =>{
            return(
                <Productcard key={index}>
                    
                <ProductimgContainer>
                <Productimg src={product.img} alt={product.alt}/>
                </ProductimgContainer>

                <Productinfo>
                <Productname> {product.name} </Productname>
                <Productdesc> {product.description}</Productdesc>
                <Productprice>{product.price} </Productprice>
                <Productbutton>{product.button} </Productbutton>
                </Productinfo>
                </Productcard>
            )
        })}
        </Productwraper>
      </Productcontainer>
  )
 }
 export default Product;