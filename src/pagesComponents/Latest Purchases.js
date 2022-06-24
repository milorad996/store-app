
import { useParams } from 'react-router-dom';
import AppCustomers from '../components/AppCustomers';
import CustomersService from '../services/CustomersService';




function LatestPurchases() {

    let { id } = useParams();

    const listOfProducts = CustomersService.getAll()


    return (
        <div>
            <ul>
                {listOfProducts.map((list, index) => (
                    <li>{list.listOfProducts}</li>
                ))}
            </ul>
        </div >


    )
}

export default LatestPurchases;