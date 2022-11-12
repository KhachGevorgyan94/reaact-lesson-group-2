import React from "react";
import ProductBox from "../../components/productBox";
import image1 from '../../assets/images/image-1.jpg'
import image2 from '../../assets/images/image-2.jpg'

class Product extends React.Component {

  // state  vorte  pahum eqn  tvyal  componenti hamar naxatesvac  popoxakannern  ays  tiruytyum  ogtagorcelu hamar
  // inchpes nayev  Reactin haskacnelu hamar,  inch vor popoxakan popoxelis nor  popoxvac ardyunqn nkarelu hamar
  state = {
    isLoading: false,
    products: []
  }

  //  ashxatum e componentn stexcvelu  pahin
  // React  class compnentneri jamanak amenakarevoraguyn  funkcianeric mekn e hamarvum

  // componentDidMount
  // ayn ashxatum e  tvyal  component   brouzerum  haytnveluc animapes heto  render funkcian ashxateluc heto
  // ayn ashxatum e  mek angam miayn  compinent stexcvelu pahin
  // ev ete anhrajesht e  compoentn stexcvelu pahin katarvi inch vor  gorcoxutyun
  // textain arjeq popoxvi,  backendic  inforamcia stana, inch vor paymanner stugi  not htmlum inforamcian  cuyc ta
  // ayd amenn kazmakerpum eqn  ays mijavayrum
  componentDidMount() {
    this.getProducts()
  }


  //  funkcia vor@  3  varkyan  heto products in veragrum e  nor  zangvac
  // aystex kirarvum e  2 angam setState  funkcian
  // arajin paragayum kirarum eqn  ejin loading avelacnelu hamar  {isLoading: true}
  // this.setstate funkcian ira mej  uni  callback  funkcia  fortex  grelov  inch vor  funkcia  kashxati  styati  inforamcian anijapes poxveluc heto
  // ays paragayum  isLoading  darcnum eqn  true  vor  mer ejum haytnvi  loadin...  ev  sksi ashxatelu  mus  funkcian  for@ grvac e  aystex
  //     this.setState({}, ()=>{})
  // this.setState  argumentov stanum e  erku parametr
  //  araji parametr@ {}  vor@  mer state  pahvac  popoxakannernen  voronq  poxelov  reactin haskacnum enq staytic invormacia e  popoxvel  ev  popoxman ardyunq nnkari
  // elord parametr  ()=>{}  callback  funkcia  vortex  grum enq hamapataxa logikan  , staytic inch vor  popoxakan  poxeluc  ev ay  popoxutyun n@nduneluc anmijapes heto
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

  //  delet  producti hamar naxatesvac  funkcia  vor@ jnjum e  mer productin kaxvac indexic
  //  ev  setState  funkciai  mijocov   tarmacnum eqn products list@
  deleteProduct = (parentIndex) => {
    console.log(parentIndex)
    this.state.products.splice(parentIndex, 1)
    this.setState({products: this.state.products})

  }

  render() {
    return <div>
      <h3>Products list</h3>
      {/*this.state.isLoading  aystex stugum eqn katarum qani der  isLoading  false e  apa  cuyc  kta  proiducnteri list@ */}
      {!this.state.isLoading ? <div className='P-products-list'>
        {/* aystex stugum eqn  ete  producti  erkarutyun uneqn aysinq n uneqn  productneri  zangvac apa  knkari  her  productnern  */}
        {/*  poxancelo ProductBox  componetn  hamapataxan  informacian*/}
        {this.state.products.length ? this.state.products.map((item, index) => {
          //  componetneri  vra karox eqn  dnel ays tesaki funckainer
          //  ete  funckain  petq e poxancel inch vor argumentenr mer paragayum index apa  compontneri  vra haytararum eqn ays tarberakoiv
          // onclick={() => this.deleteProduct(index)}
          // isk ete  argumenbtov voch mi parametre chi spasum karox eqn  grel asypes
          // onclick={this.deleteProduct}
          return <ProductBox deleteMe={() => this.deleteProduct(index)} key={index} item={item}/>
        }) : <div>
          {/* sa  hakarak paymann ete procuctnern  ekel e  bayc ayn datark e  apa cuyc kta ays  informacian*/}
          <p>Product list was empty</p>
        </div>}
      </div> : <div>
        {/* aystex stugvum e hakarak payman  ete isLoading  true  apa  cuyc  kta  loading...*/}
        <p>loading.....</p>
      </div>}
    </div>
  }
}

export default Product