import React from "react";
import './style.scss';
import ComponentBox from "./compo-box";

class CompoIntegrat extends React.Component {
  ComponentBoxList = [
    {
      colorValue: '#3dcece',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'
    },
    {
      colorValue: '#234646',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#47ce3d',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#b3ce3d',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#ce3db1',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#5b6b6b',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#8c551e',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#b2510c',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#3dcece',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
      text: ' text'

    },
    {
      colorValue: '#234646',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.'
    },

  ]


  render() {
    return <section className="G-container">
      <div className="compo-integration-flex">

        {/* Map  funkciai mijocov  html  dashtum nkarum eqn  mer uzac  componentnern  kaxvac  zangvacic */}
        {/* ete  projecti mej  kan voroshaki krknvox inforamcianer kam inch vor  blokner voronq statik
         en  ev nman ira karox eqn sarqel  1  component  unenalov  ayd  inforamcia i list  ev  map  funkcai  kijocov  ciklov nkarel ayd  componentenr,
          stexcelocv  1  cpmponent argumentov  kpoxanceqn  hamapatasxan  inforamcian*/}
        {/*  componentin  baci argumentic vori mijocov  poxancum einq  tarber  popoxakanner ev  funkcianer */}
        {/*  karox eqn  poxancel  html  tegeric  baxkacac informacia*/}
        {/*          <ComponentBox></ComponentBox>  ays  tarberakov  eb ayd  compnenti  nersum  grelov hamapatsxan  html teger@  kam  mek ayl  component    */}

        {/*  <ComponentBox>   <h3>{item.text}</h3> </ComponentBox> */}
        {this.ComponentBoxList.map((item, index) => {
          return <ComponentBox key={index}
                               main={item.description}
                               colorValue={item.colorValue}>
            <h3>{item.text}</h3>
          </ComponentBox>
        })}

      </div>
    </section>
  }
}

export default CompoIntegrat