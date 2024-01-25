import { createRouter,createWebHashHistory } from 'vue-router'
import Home from "./Home";
import AllCategories from "./components/Categories/AllCategories";
const routes = [
{
path: '/',
name: 'home',
component: Home
},
{
    path: '/categories',
    name: 'categories',
    component: AllCategories
    }
    
];
const router = createRouter({
history: createWebHashHistory(),
routes
})
export default router