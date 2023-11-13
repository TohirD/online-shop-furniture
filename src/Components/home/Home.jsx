import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import '../assets/style/global.css'
import Items from '../items/Items'
import Categories from '../category/Categories'
import ShowFullItem from '../show-full-item/ShowFullItem'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            currenItems: [],
            items: [
                {
                    id: 1,
                    title: 'Chair Black',
                    img: 'chairB.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Table',
                    img: 'table.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa.webp',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'sofa',
                    price: '549.99'
                },
                {
                    id: 4,
                    title: 'Lamp',
                    img: 'lamp.jpeg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'light',
                    price: '25.00'
                },
                {
                    id: 5,
                    title: 'Chair White',
                    img: 'chairW.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currenItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    
 render(){
  return (
    <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currenItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
    </div>
   )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
        this.setState({currenItems: this.state.items})
        return
    }

    this.setState({
        currenItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
        if(el.id === item.id){
            isInArray = true
        }
    })

    if(!isInArray)
        this.setState({orders: [...this.state.orders, item]})
  }
}

export default Home