

const Napitki = (n) => {
  return (
    <li>

    <img src={n.image} alt="" />
    <h3>{n.name}</h3>
    <p>{n.description}</p>
    <div className="card_button">
      <button>Выбрать</button>
      от {n.price} ₽
    </div>
    </li>
  
    
  )
}

export default Napitki