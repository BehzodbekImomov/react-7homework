import "./Aksiya.scss"


const Aksiya = () => {
  return (
    <div>
      <ul>
        <li>
          <img src="/aksiya1.svg" alt="" />
        </li>
        <li>
          <img src="/aksiya2.svg" alt="" />
        </li>
        <li>
          <img src="/aksiya1.svg" alt="" />
        </li>
        <li>
          <img src="/aksiya2.svg" alt="" />
        </li>
       
      
      </ul>
      <div className="dostavki-card">
        <h2>Проверить адрес доставки</h2>

<input  placeholder="Адрес" type="text" />
<button>Проверить</button>
      </div>
      
    </div>
  );
};

export default Aksiya;
