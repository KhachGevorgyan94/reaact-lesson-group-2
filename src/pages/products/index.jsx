import React from "react";
import ProductBox from "../../components/productBox";
import image1 from '../../assets/images/image-1.jpg'
import image2 from '../../assets/images/image-2.jpg'

class Product extends React.Component {

  state = {
    isLoading: false,
    products: []
  }

  //  ashxatum e componentn stexcvelu  pahin
  componentDidMount() {
    this.getProducts()
  }


  getProducts = () => {

    this.setState({isLoading: true}, () => {
        setTimeout(() => {
          this.setState({
            products: [
              {
                name: 'product 1',
                price: 2000,
                description: 'lorem 10 10',
                symbol: '$',
                image: image1,
                date: '20/11/2022'
              }, {
                name: 'product 2',
                price: 3000,
                description: 'lorem 20 20',
                symbol: '$',
                image: image2,
                date: '20/11/2022'
              }, {
                name: 'product 3',
                price: 4000,
                description: 'lorem 30 30',
                symbol: 'AMD',
                image: image2,
                date: '20/11/2022' // 20-11-2022
              }
            ]
          })
          this.setState({isLoading: false})
        }, 3000)
      }
    )

  }

  deleteProduct = (parentIndex) => {
    console.log(parentIndex)
    this.state.products.splice(parentIndex, 1)
    this.setState({products: this.state.products})

  }

  render() {
    return <div>
      <h3>Products list</h3>
      {!this.state.isLoading ? <div className='P-products-list'>
        {this.state.products.length ? this.state.products.map((item, index) => {
          return <ProductBox deleteMe={() => this.deleteProduct(index)} key={index} item={item}/>
        }) : <div>
          <p>Product list was empty</p>
        </div>}

      </div> : <div>
        <p>loading.....</p>
      </div>}
    </div>
  }
}

export default Product