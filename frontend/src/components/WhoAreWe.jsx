import React from 'react'
import { data } from '../restApi.json'
import '../Css/Dryfruites.modules.css'

const Dryfruites = () => {
  return (
    <>
      <center>   <h1>Dryfruit column</h1></center>
    

      <div className="main-Dry-card">
        {data[0].Dryfruits.map((element) => {
          // console.log(data[0].Dryfruits);
          console.log(element);
          return (
            <div className="card-dryfruite" key={element.id}>
              <img src={element.image} alt={element.image} width={'200px'} />
              <h2>{element.title}</h2>
              {/* <h2 >{element.description}</h2> */}
              <p>{element.weight}</p>
              <p>{element.Rs}</p>
              <button className='byu-now'>Buy Now</button>
            </div>
          );
        })}
      </div>

    </>
  )
}



export default Dryfruites
