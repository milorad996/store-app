class ProductsService {


    constructor() {
        this.products = [
            { name: 'tv' },
            { name: 'telefon' },
            { name: 'olovka' },
            { name: 'kamera' },
            { name: 'casa' },
            { name: 'solja' },
            { name: 'stolica' },
            { name: 'slika' }

        ]
    }
    getAll() {
        return this.products
    }
    get(id) {
        // send request to get video with id from server through http client
    }
}
export default new ProductsService;