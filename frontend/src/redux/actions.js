import axios from 'axios';
import store from './store';
import { API_URL } from '../api-config'
export const login = async(user) => {
    const res = await axios.post(API_URL + '/users/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
}
export const getProducts = async() => {
    const res = await axios.get(API_URL + '/products');
    store.dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: res.data
    });
}
export const clearCart = () => {
    store.dispatch({
        type: 'CLEAR_CART'
    });
}

export const addCart = (product) => {
    store.dispatch({
        type: 'ADD_CART',
        payload: product
    })
}
export const logout = () => {

}