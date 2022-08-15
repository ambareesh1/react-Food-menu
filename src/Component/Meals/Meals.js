import React, { Fragment } from 'react';

import MealsSummary from './MealsSUmmary';
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />

      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
