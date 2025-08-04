import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? (
        <li>No Ingredients</li> 
      ) : (
        props.stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => props.removeFromBurger(index)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
