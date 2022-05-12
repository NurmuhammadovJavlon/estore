import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Javlon',
            email: 'Javlon@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'John@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
        name: 'Nike Foot Wear',
        category: 'Shoes',
        image: '../images/product-1.png',
        price: '120000',
        countInStock: 1,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        sale: true,
        sizes:'XS,S,M,L,XL,XXL'
    },
        {
        name: 'Adidas Foot Wear',
        category: 'Shoes',
        image: '../images/product-2.png',
        price: '100000',
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        sale: false,
        sizes:'XS,S,M,L,XL,XXL'
    },
        {
        name: 'Salamander foot wear',
        category: 'Shoes',
        image: '../images/product-3.png',
        price: '150000',
        countInStock: 0,
        brand: 'Salamander',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        sale: true,
        sizes:'XS,S,M,L,XL,XXL'
    },
        {
        name: 'Nike Foot Wear 2',
        category: 'Shoes',
        image: '../images/product-4.png',
        price: '130000',
        countInStock: 15,
        brand: 'Nike',
        rating: 5,
        numReviews: 15,
        description: 'high quality product',
        sale: true,
        sizes:'S,M,L,XL,XXL'
    },
        {
        name: 'Puma Pants',
        category: 'Pants',
        image: '../images/product-5.jpg',
        price: '145000',
        countInStock: 1,
        brand: 'Puma',
        rating: 3.5,
        numReviews: 9,
        description: 'high quality product',
        sale: false,
        sizes:'XS,S,M,L,XL,XXL'
    },
    ],
}

export default data;