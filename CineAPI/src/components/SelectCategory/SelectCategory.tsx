import "./SelectCategory.scss";
import { useSelectContext } from "../../hooks/useSelectContext";
import type { Categories } from "../../types/movieType";

const SelectCategory = () => {
  const { category, setCategory } = useSelectContext();

  return (
    <div className="categories">
      <select
      className="menu"
        value={category}
        onChange={(e) => setCategory(e.target.value as Categories)}
      >
          <option value="" disabled>
    Selecione uma categoria
  </option>
  
        <option value="/movie/now_playing">Em cartaz</option>
        <option value="/movie/popular">Populares</option>
        <option value="/movie/top_rated">Mais bem avaliados</option>
        <option value="/movie/upcoming">Próximas estreias</option>
      </select>
    </div>
  );
};

export default SelectCategory;
