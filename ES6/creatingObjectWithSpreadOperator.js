const daytimeMeals = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}

const nighttimeMeals = "steak and fries";

const myMeals = {
    ...daytimeMeals,
    nighttimeMeals
};

console.log(myMeals);