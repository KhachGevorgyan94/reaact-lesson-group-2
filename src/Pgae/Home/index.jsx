import React from "react";
import FoodBox from "./FoodBox";

import img1 from "../../assets/images/salad.jpg"
import img2 from "../../assets/images/pizza.jpg"
import img3 from "../../assets/images/noodles.jpg"
import img4 from "../../assets/images/noodels.jpg"
import img5 from "../../assets/images/05.jpg"
import img6 from "../../assets/images/06.jpg"
import img7 from "../../assets/images/07.jpg"
import img8 from "../../assets/images/08.jpg"
import lastpic from "../../assets/images/avoca.jpg"
import TitleComponent from "../../components/title-component";

export default class Home extends React.Component {

  state = {
    products: [
      {
        "img": img1,
        "alt": "img",
        "header": "Fusce dictum finibus",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $45 / $55",
        category: 'Salad'
      },
      {
        "img": img2,
        "alt": "img",
        "header": "Aliquam sagittis",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $65 / $70",
        category: 'Salad'
      },
      {
        "img": img3,
        "alt": "img",
        "header": "Sed varius turpis",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $30.5",
        category: 'Noodle'
      },
      {
        "img": img4,
        "alt": "img",
        "header": "Aliquam sagittis",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $25.50",
        category: 'Noodle'
      },
      {
        "img": img5,
        "alt": "img",
        "header": "Maecenas eget justo",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $80.25",
        category: 'Noodle'
      },
      {
        "img": img6,
        "alt": "img",
        "header": "Quisque et felis eros",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $20 / $40 / $60",
        category: 'Noodle'
      },
      {
        "img": img7,
        "alt": "img",
        "header": "Sed ultricies dui",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $94",
        category: 'Pizza'
      },
      {
        "img": img8,
        "alt": "img",
        "header": "Donec porta consequat",
        "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        "price": " $15",
        category: 'Pizza'
      }
    ],
    filteredProducts: [],
    activeTab: 'Salad'
  }

  componentDidMount() {
    console.log('111111111111')
    this.selectProduct(this.state.activeTab)
  }

  componentWillUnmount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('2222222222222222')

    console.log(this.state, 'this.state')
    console.log(prevProps,'prevProps')
    console.log(prevState,'prevState')
  }


  selectProduct = (productName) => {
    let newCategory = []
    if (productName !== 'All') {
      newCategory = this.state.products.filter(x => x.category === productName)
    } else {
      newCategory = this.state.products
    }
    this.setState({filteredProducts: newCategory, activeTab: productName})
  }


  render() {
    return (
      <div  className='P-home-section'>
        <TitleComponent title='Welcome to Simple House'
                        description='Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.'/>

        <section className='section2'>
          <div className='G-container'>
            <div className='G-justify-center '>
              <ul className='G-flex'>
                <li className={`${this.state.activeTab === 'All' ? 'active' : ''}`}
                    onClick={() => this.selectProduct('All')}>All
                </li>
                <li className={`${this.state.activeTab === 'Pizza' ? 'active' : ''}`}
                    onClick={() => this.selectProduct('Pizza')}>Pizza
                </li>
                <li className={`${this.state.activeTab === 'Salad' ? 'active' : ''}`}
                    onClick={() => this.selectProduct('Salad')}>Salad
                </li>
                <li className={`${this.state.activeTab === 'Noodle' ? 'active' : ''}`}
                    onClick={() => this.selectProduct('Noodle')}>Noodle
                </li>
              </ul>
            </div>
            <div className="G-flex-wrap food-boxs">
              {this.state.filteredProducts.map((item, index) => (
                <FoodBox
                  box={item}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className='section3 G-flex G-container'>
          <img src={lastpic} alt="avocado"/>
          <div>
            <h2>Maecenas nulla neque</h2>
            <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor
              sit
              amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
            <button type="submit">Read more</button>
          </div>
        </section>
      </div>
    );
  }
}