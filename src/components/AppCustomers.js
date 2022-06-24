import { useState } from "react";
import CustomersService from "../services/CustomersService";





function AppCustomers() {

    const [newCustomer, setNewCustomer] = useState({
        firstName: '',
        lastName: '',

    });
    const [customers, setCustomers] = useState(CustomersService.getAll())


    const handleRemoveCustomer = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
    }

    return (
        <div>
            <h1>AppCustomers page</h1>


            <ul>
                {customers.map((customer, index) => (
                    <div>
                        <li key={index}>{customer.firstName + " " + customer.lastName} {" "}

                            <button onClick={() => handleRemoveCustomer(index)}>Remove</button>
                        </li>
                    </div>
                ))}

            </ul>

        </div>
    )
}

export default AppCustomers;