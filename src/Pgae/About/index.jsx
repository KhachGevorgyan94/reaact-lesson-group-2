import React, {useEffect, useState} from "react";
import img1 from "../../assets/images/about-01.jpg"
import img2 from "../../assets/images/about-02.jpg"
import img3 from "../../assets/images/about-03.jpg"
import img4 from "../../assets/images/about-04.jpg"
import Peapol from "./Peapol";
import TitleComponent from "../../components/title-component";
import Header from "../../components/Header";
import {BrowserRouter as Router} from "react-router-dom";

export default function About() {
  const [peapol, setpeapol] = useState([])
  useEffect(() => {
    setpeapol([
      {
        "img": img1,
        "Name": "Jennifer Soft",
        "position ": "Founder and CEO",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
        "insta": "true"
      },
      {
        "img": img2,
        "Name": "Jennifer Soft",
        "position ": "Founder and CEO",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
        "insta": "true"
      },
      {
        "img": img3,
        "Name": "Jennifer Soft",
        "position ": "Founder and CEO",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
        "insta": "true"
      },
      {
        "img": img4,
        "Name": "Jennifer Soft",
        "position ": "Founder and CEO",
        "info": "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
        "facebook": "true",
        "twitter": "true",
        "insta": "true"
      }
    ])
  }, [])
  return <>

    <TitleComponent title='About Simple House'
                    description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'/>

    <section className="G-container G-flex-wrap">
      {peapol.map((one, index) => (
        <Peapol
          key={index}
          person={one}
        />
      ))}
    </section>
  </>
}