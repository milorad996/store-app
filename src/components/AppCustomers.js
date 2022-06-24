import { useState } from "react";
import CustomersService from "../services/CustomersService";
import { BrowserRouter as Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import LatestPurchases from "../pagesComponents/Latest Purchases";




function AppCustomers() {

    let match = useRouteMatch();

    const [newCustomer, setNewCustomer] = useState({
        firstName: '',
        lastName: '',

    });
    const [customers, setCustomers] = useState(CustomersService.getAll())


    const handleRemoveCustomer = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
    }

    const handleFirstNameChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            firstName: e.target.value
        })
    }
    const handleLastNameChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            lastName: e.target.value
        })
    }

    const addCustomer = (e) => {
        e.preventDefault();
        setNewCustomer([...customers, newCustomer])

        CustomersService.addCustomers(newCustomer);
        setNewCustomer({
            firstName: '',
            lastName: '',

        });
    }

    return (
        <div>
            <h1>AppCustomers page</h1>


            <h3>Novi kupac</h3>
            <form className="form" onSubmit={addCustomer}>
                <input required type="text" value={newCustomer.firstName} placeholder="Ime" onChange={handleFirstNameChange} />
                <input required type="text" value={newCustomer.lastName} placeholder="Prezime" onChange={handleLastNameChange} />

                <button>Add</button>
            </form>

            <ul>
                {customers.map((customer, index) => (
                    <div>
                        <li key={index}>{customer.firstName + " " + customer.lastName} {" "}

                            <button onClick={() => handleRemoveCustomer(index)}>Remove</button>


                            <Link key={index} to='/customers/:id'>Latest Purchases</Link>

                        </li>


                    </div>
                ))}

            </ul>
            <Switch>
                <Route path='/customers/:id' exact>
                    <LatestPurchases />
                </Route>
            </Switch>
        </div>


    )
}

export default AppCustomers;