

const Combo = (c) => {
  return (
    <li>

    <img src={c.image} alt="" />
    <h3>{c.name}</h3>
    <p>{c.description}</p>
    <div className="card_button">
      <button>Выбрать</button>
      от {c.price} ₽
    </div>
    </li>
  )
}

export default Combo