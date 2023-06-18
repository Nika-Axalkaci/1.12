import './style/card.css'


function Card({image,name,author,description}){
  
  function click(){
    console.log(name)
  
  }
  return <div className="main-div">
  <div className="img-div"><img src={image} alt={name} /></div>
  <div className="about-div">
    <p>name: {name}</p>
    <p>author: {author}</p>
    <p>decription:</p>
    <p className='desc'>{description}</p>
  </div>
  <div className="divider"></div>
  <button onClick={click}>see</button>
</div>
}


export default Card