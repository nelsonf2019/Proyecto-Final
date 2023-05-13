import { useEffect } from "react";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import SearchBar from "../Nav/nav";
import { Link } from "react-router-dom";

export default function Categories() {
  const allCategories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
    <SearchBar/>    
    <main>
        <h1>Categorias</h1>
      <div className="buttons-container">
        {allCategories?.map((c, index) => (
          <Link to={`/categories/${c.name}`} key={index} className="buttons">
            <img className="image-button" src={c.img} alt={c.name}></img>
            <p>{c.name}</p>
          </Link>
        ))}
      </div>
    </main>
    </>
  );
}