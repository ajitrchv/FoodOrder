import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";



const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  
  const [httpError, setHttpError] = useState();

  useEffect(() => {

    const fetchMeals = async() => {
      const response = await fetch('https://foodorder-6800d-default-rtdb.firebaseio.com/meals.json',{});

      if(!response.ok){
        throw new Error('Something went wrong :(');
      };

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
      setIsLoading(false);
    };
      fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
      });
    
  },[]);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <Card>
        <p>Loading...</p>
      </Card>
  </section>
  };
  if(httpError){
    return <section className={classes.MealsError}>
      <Card>
        <p>{httpError}</p>
      </Card>
  </section>

  }

  // if(isLoading){
  //   return (
  //     <section className={classes.MealsLoading}>
  //     <Card>
  //     <div style={{ display: 'block', width: 700, padding: 30 }}>
  //       <Spinner animation="border" variant="primary" /> <br/>
  //       <Spinner animation="grow" variant="warning" />
  //     </div>
  //     </Card>
  //     </section>
  //   );
  // };


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
