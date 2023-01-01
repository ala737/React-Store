import { Card, List,Image, Typography, Badge, Rate, Button, message,Spin } from 'antd';
import Item from 'antd/es/list/Item';
import React, { useEffect,useState } from 'react'
import { getAllProducts } from '../API/Api'
import { AddToCart } from '../API/Api';
import '../../App.css'
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../API/Api';

function Products() {
    const [loading,setLoading] = useState(false)
    const param = useParams()
    const [items,setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        (param.categoryId ? 
            getProductByCategory(param.categoryId) : 
            getAllProducts()).then((res) => {
          
            setItems(res.products)
            setLoading(false);
        });

    }, [param]);

    if (loading){
        return <Spin spinning/>
    }

    return <div>
      
        <List
        grid={{column:3}} 
        renderItem={(product,index) =>{
            return (
            <Badge.Ribbon text={product.discountPercentage + ' %'} color='pink' className='itemCardBadg'>    
            <Card 
            className='itemCard'
                title={product.title}
                key={index} 
                cover={<Image className='itemCardImage' src={product.thumbnail} />}
                actions={[<Rate allowHalf disabled value={product.rating}></Rate>,<AddToCartButton item={product} />]}
                

            >
                <Card.Meta title={
                  <Typography.Paragraph>
                     Price :${product.price}{" "}
                     <Typography.Text delete type="danger">
                        ${ parseFloat( product.price +
                         (product.price*product.discountPercentage)/100).toFixed(2)}
                     </Typography.Text>
                  </Typography.Paragraph>}

                   description = {<Typography.Paragraph ellipsis={{rows:1, expandable:true,symbol:'more' }}>{product.description}</Typography.Paragraph>}

                ></Card.Meta>
            </Card>
            </Badge.Ribbon>
            )
        }} 
        dataSource={items}>

        </List>
    </div>
}
function AddToCartButton({item}){
    const [loading,setLoading] = useState(false);
    const AddProductToCart=()=>{
        setLoading(true);
        AddToCart(item.id).then(res=>{
            message.success(`${item.title} has been succefuly adedd to cart`)
            setLoading(false);
        });
       
    }
    return <Button type='link' onClick={() =>{
        AddProductToCart();
    }}
    loading={loading}
    >
    Add To Cart
    </Button>
}
export default Products
