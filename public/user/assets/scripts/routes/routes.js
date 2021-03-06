import AddFood from '../views/pages/AddFood.js';
import Dashboard from '../views/pages/Dashboard.js';
import EditFood from '../views/pages/EditFood.js';
import FoodDiary from '../views/pages/FoodDiary.js';
import Goal from '../views/pages/Goal.js';
import Summary from '../views/pages/Summary.js';
import EditProfile from '../views/pages/EditProfile.js';
import EditPassword from '../views/pages/EditPassword.js';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/dashboard/:id': Dashboard,
  '/food-diary': FoodDiary,
  '/food-diary/:id': FoodDiary,
  '/add-food': AddFood,
  '/add-food/:id': AddFood,
  '/edit-food/:id': EditFood,
  '/goal': Goal,
  '/goal/:id': Goal,
  '/summary': Summary,
  '/edit-profile': EditProfile,
  '/edit-password': EditPassword,
};

export default routes;
