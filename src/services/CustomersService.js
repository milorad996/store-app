import { useState } from "react";



class CustomersService {


    constructor() {
        this.customers = [
            { firstName: 'Milan', lastName: 'Milic', listOfProducts: ['car', 'hat', 'cup'] },
            { firstName: 'Ana', lastName: 'Anic', listOfProducts: ['book', 'notebook', 'cup'] },
            { firstName: 'Pero', lastName: 'Peric', listOfProducts: ['computer', 'phone', 'mouse'] },
            { firstName: 'Jelena', lastName: 'Jelic', listOfProducts: ['t-shirt', 'dress', 'lipstick'] },
            { firstName: 'Nenad', lastName: 'Nedic', listOfProducts: ['wallet', 'belt', 'trousers'] }
        ]

    }
    addCustomers(newCustomer) {
        this.customers.push(newCustomer)
    }

    removeCustomer(index) {
        this.customers = [...this.customers.slice(0, index), ...this.customers(index + 1)]
    }


    getAll() {
        return this.customers

    }
    get(id) {
        // send request to get video with id from server through http client
    }


}
export default new CustomersService;