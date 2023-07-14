

const Zakuski = (z) => {
  return (
    <li>
  
    <img src={z.image} alt="" />
    <h3>{z.name}</h3>
    <p>{z.description}</p>
    <div className="card_button">
      <button>Выбрать</button>
      от {z.price} 
    </div>
  
      </li>
  )
}

export default Zakuski