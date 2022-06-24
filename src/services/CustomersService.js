import { useState } from "react";



class CustomersService {


    constructor() {
        this.customers = [
            { firstName: 'Milan', lastName: 'Milic' },
            { firstName: 'Ana', lastName: 'Anic' },
            { firstName: 'Pero', lastName: 'Peric' },
            { firstName: 'Jelena', lastName: 'Jelic' },
            { firstName: 'Nenad', lastName: 'Nedic' }
        ]

    }
    addCustomers(newCustomer) {
        this.customers.push(newCustomer)
    }


    getAll() {
        return this.customers

    }
    get(id) {
        // send request to get video with id from server through http client
    }


}
export default new CustomersService;