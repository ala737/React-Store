import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const onMenuClick=(item) =>{
        navigate(`/${item.key}`)

    }
  return (
   

      <div className="AppHeader">
        <Menu
        onClick={onMenuClick}
        mode='horizontal'
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
                        key : "men-shirts"
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
      </div>
   
  )
}

export default Header
