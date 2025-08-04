import Ingredient from '../Ingredient/Ingredient';

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => props.addToBurger(ingredient)}
          buttonLabel="+"     
        />
      ))}
    </ul>
  );
};

export default IngredientList;

  