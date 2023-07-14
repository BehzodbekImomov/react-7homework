import { Link } from "react-router-dom";


import "./Header.scss"


const Header = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between align-items-center">
        <ul className="d-flex gap-5 justify-content-between align-items-center">
          <li>
            <Link>
              <img src="/Location.svg" alt="" />
              Москва
            </Link>
          </li>
          <li>
            <Link>
           
            Проверить адрес
            </Link>
          </li>
          <li>
            <Link>
             
            Среднее время доставки*:<span>00:24:19</span>
            </Link>
          </li>
        </ul>
        <ul className="d-flex gap-5 justify-content-between align-items-center">
          <li>
            <Link>Время работы: с 11:00 до 23:00</Link>
          </li>
          <li>
            <Link><img src="/user.svg" alt="" /> Войти в аккаунт</Link>
          </li>
        </ul>
      </nav>
     <div className="nav-title">
   <div className="imgs d-flex align-items-center gap-3">
   <img src="/logoPitsa2.svg" alt="" />
    <img src="/logoPitsa.svg" alt="" />
   </div>
   <Link><img src="/karzina.svg" alt="" /> <p>0 ₽</p></Link>
     </div>
 
    </div>
  );
};

export default Header;
