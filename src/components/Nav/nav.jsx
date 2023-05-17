import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logoCarro from "../../assets/cart-alt-regular-24.png";
import logoUser from "../../assets/user-regular-24.png";
import logoSearch from "../../assets/search-alt-regular-24.png";
import logo from "../../assets/Recurso 1.png";
import { useDispatch , useSelector} from "react-redux";
import { getProductByName } from "../../redux/actions";
import styles from "./searchBar.module.css";

export default function SearchBar({ view }) {
  const [name, setName] = useState("");
  const carrito=useSelector((state) => state.carrito);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getName(name));
  }

  function handleSubmit() {
    dispatch(getProductByName(name));
    setName("");
    navigate(`/Search/${name}`)
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <div className={styles.divSearchBar}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} to="/">
          <img className={styles.logoImg} src={logo} alt="TukiMarket" />
        </Link>
      </div>
      {view ? (
        <div className={styles.divInput}>
          <input
            type="search"
            value={name}
            placeholder="¿Que vas a llevar hoy?"
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            className={styles.input}
          />

          <button onClick={handleSubmit} className={styles.buttonSerch}>
            <img src={logoSearch} className={styles.img} />
          </button>
        </div>
      ) : null}

      <div className={styles.divUser}>
        <div>
          <button className={styles.buttonLogin}>
            <Link to="/formLogin" className={styles.link}>
              Iniciar Sesión
            </Link>
            <span className={styles.span1}>|</span>
            <Link to="/formRegister" className={styles.link}>
              Registrarse
            </Link>
            <span className={styles.span1}>|</span>
            <Link to="/formCreateProduct" className={styles.link}>
              Crear
            </Link>
          </button>
        </div>
        <button className={styles.button}>
          <Link to="/carroBuy">
            <img src={logoCarro} className={styles.img2} />
          </Link>
            <span>{carrito.length}</span>
        </button>
        <button className={styles.button}>
          <Link to="/formLogin">
            <img src={logoUser} className={styles.img2} />
          </Link>
        </button>
      </div>
    </div>
  );
}
