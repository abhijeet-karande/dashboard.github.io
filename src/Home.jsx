import React from 'react'
import Example from './Bar';
import Example1 from './pi';
import 
{   BsCurrencyRupee, BsHandbagFill,BsSearch,BsChevronDown,BsWallet2 }
 from 'react-icons/bs'
 import { TbNotes,TbArrowNarrowDown,TbArrowNarrowUp} from "react-icons/tb";



function Home() {
    const productSalesData = [
        { productName: 'Abstract 3d', stock: 32, price: 50, totalSell: 20, image: 'abstract3d.jpg' },
        { productName: 'Sarphens illustration', stock: 32, price: 50, totalSell: 20, image: 'sarphens.jpg' },
        // Add more product data as needed
      ];
      
  return (
    
    <main className='main-container'>
        

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <BsCurrencyRupee className='card_icon'/>
                    <h3>Earning</h3>
                </div>
                <div> 
                    <h1>$198k</h1>
                    <TbArrowNarrowUp className='card_icon'/>
                    <h3>37.8% this month</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <TbNotes className='card_icon'/>
                    <h3>Orders</h3>
                </div>
                <h1>$2.4k</h1>
                <TbArrowNarrowDown className='card_icon'/>
                <h3>2% this month</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsWallet2 className='card_icon'/>
                    <h3>Balance</h3>
                </div>
                <h1>$2.4k</h1>
                <TbArrowNarrowDown className='card_icon'/>
                <h3>2% this month</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsHandbagFill className='card_icon'/>
                    <h3>Total Sales</h3>
                </div>
                <h1>$89k</h1>
                <TbArrowNarrowUp className='card_icon'/>
                <h3>11% this week</h3>
            </div>
        </div>

        
        <div className='charts'>
                <div className='charts-pi'>
                    <Example1/> 
                </div>
                <div className='charts-bar'>
                   <Example/> 
                </div>
                 
        </div>
        

        <div className='product-sales'>
        
            <span className='space-words'>Product Sell</span>
            <span className='space-words'><BsSearch  className='icon space-words'/>Search</span>    
            <span className='space-words'>last 30 days<BsChevronDown  className='icon'/></span>
                <table>
                    <thead>
                        <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total Sell</th>
                        </tr>
                    </thead>
                <tbody>
                    {productSalesData.map((product, index) => (
                    <tr key={index}>
                        <td><img src={product.image} alt={product.productName} width="50" height="50" /></td>
                        <td>{product.productName}</td>
                        <td>{product.stock} in stock</td>
                        <td>${product.price}</td>
                        <td>${product.totalSell}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
    </main>
  )
}

export default Home
