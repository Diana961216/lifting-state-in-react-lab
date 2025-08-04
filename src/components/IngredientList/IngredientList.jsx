const IngredientList = (props) => {
    return <ul>
        {props.ingredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => props.addToBurger(ingredient)}>Add</button>
            </li>
        ))}
        {props.ingredients.length === 0 && <li>No ingredients available</li>}        
        </ul>;
  };
  
  export default IngredientList;
  