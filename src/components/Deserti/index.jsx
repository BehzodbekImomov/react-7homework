

const Deserti = (d) => {
  return (
    <li>
  
    <img src={d.image} alt="" />
    <h3>{d.name}</h3>
    <p>{d.description}</p>
    <div className="card_button">
      <button>Выбрать</button>
      от {d.price} 
    </div>
  
      </li>
  )
}

export default Deserti