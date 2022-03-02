import DUMMY_MEALS from './dummy-meals'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () =>
{
    const mealslist = DUMMY_MEALS.map( meal => <li>{meal.name}</li>);
    return <section className={classes.meals}>
        <ul>
            {mealslist}
        </ul>
    </section>
}
export default AvailableMeals;