import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import Typography from 'antd/es/typography/Typography';
import ShoppingCartOutLined from 'antd/es/typography/Typography';


function Header() {
    const navigate = useNavigate();
    const onMenuClick=(item) =>{
        navigate(`/${item.key}`)

    }
  return (
   

      <div className="AppHeader">
        <Menu
        onClick={onMenuClick}
        mode="horizontal" breakpoint="md"
        
         items={[
            {
                label :"Home",
                key : ""
            },
            {
                label :"Men",
                key : "men",
                children: [
                    {
                        label : "Shirts",
                        key : "mens-shirts"
                    },
                    {
                        label : "Shoes",
                        key : "mens-shoes"
                    },
                    {
                        label : "Watches",
                        key : "mens-watches"
                    },
                ]           
            },
            {
                label :"Women",
                key : "women",
                children: [
                    {
                        label : "Dresses",
                        key : "womens-dresses"
                    },
                    {
                        label : "Shoes",
                        key : "womens-shoes"
                    },
                    {
                        label : "Watches",
                        key : "womens-watches"
                    },
                    {
                        label : "Bags",
                        key : "womens-bags"
                    },
                    {
                        label : "Jewellery",
                        key : "womens-jewellery"
                    },
                ]
            },
            {
                label :"Fragrances",
                key : "fragrances"
            },
        ]} />

      <ShoppingCartOutLined />

       
      </div>
   
  );
}

export default Header
