import React, { Component } from 'react'
import '../category/categories.css'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'chairs'
                },
                {
                    key: 'sofa',
                    name: 'sofa'
                },
                {
                    key: 'light',
                    name: 'lamp'
                },
                {
                    key: 'tables',
                    name: 'tables'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories