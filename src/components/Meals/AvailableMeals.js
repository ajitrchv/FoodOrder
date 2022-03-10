import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";



const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() => {
      const response = await fetch('https://foodorder-6800d-default-rtdb.firebaseio.com/meals.json',{});
      const responseData = await response.json();

      const loadedMeals=[];
      for (const key in responseData){
        loadedMeals.push({
          id: key,
          //key: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  },[]);


  const mealslist = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
