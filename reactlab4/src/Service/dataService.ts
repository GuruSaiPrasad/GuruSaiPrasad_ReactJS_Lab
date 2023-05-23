import axios from "axios";
import Expense from "../Model/Expence";

const getItemsFromServer = () => {
    return axios.get<Expense[]>('http://localhost:3001/items')
        .then(res => res.data)

}

const postItemstoServer =(newItem:Omit<Expense,"id">) => {
    return axios.post<Expense>(
        'http://localhost:3001/items',
        newItem,
        { 
            headers:{
                "Content-Type": "application/json"
            }
        }
    ).then(res=> res.data)
}

export {
    getItemsFromServer,postItemstoServer
}