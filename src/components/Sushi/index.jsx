

const Sushi = (s) => {
  return (
    <li>
  
    <img src={s.image} alt="" />
    <h3>{s.name}</h3>
    <p>{s.description}</p>
    <div className="card_button">
      <button>Выбрать</button>
      от {s.price} 
    </div>
  
      </li>
  )
}

export default Sushi