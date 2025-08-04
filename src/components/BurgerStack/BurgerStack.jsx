const BurgerStack = (props) => {
    return <ul>
        {props.stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => props.removeFromBurger(index)}>Remove</button>
            </li>
        ))}
        {props.stack.length === 0 && <li>Your burger is empty!</li>}
    </ul>;
  };
  
  export default BurgerStack;