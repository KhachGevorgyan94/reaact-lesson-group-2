import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

// compomnentnern ogtagorcelu hamar  pete anpayman inport anel,  isk  import anelu hamar
// ayd  fayl@ stexcelcu heto  tvyal  funkcian  petq e  export anel


class App extends React.Component {
  const
  getMyName = () => {

    return {}
  }

  render() {
    // return aneluc  chenq  karox  miajamanak  mi qani ban return anel
    // ayd  patcharov  ogtagorcum eqn <></> datark  tegern  mi qani  ban  xmbavorvac durs hanelu hamar
    // componetnenr  steceluc  heto  erb export en anum  aystex  grum eqn  import arac  componenti anun  tegi  tesqov
    // mer  bolor  faylern sarqum eqn voch te .js  ayc  canckac fayl stexceluc  sarqum eqn  .jsx  tesaki  fayler
    return <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  }
}

export default App

