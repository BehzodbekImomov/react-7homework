


const Pitsa = (prod) => {
  return (
    <li>
  
  <img src={prod.image} alt="" />
  <h3>{prod.name}</h3>
  <p>{prod.description}</p>
  <div className="card_button">
    <button>Выбрать</button>
    от {prod.price} ₽
  </div>

    </li>
  )
}

export default Pitsa