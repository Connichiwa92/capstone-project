import greekSaladjpg from '../images/greekSalad.jpg';
import bruschettajpg from '../images/bruschetta.jpg';
import lemonDessertjpg from '../images/lemonDessert.jpg';

const Dishes = [
    {
        id: 1,
        title: "Greek Salad",
        price: 12.99,
        image: greekSaladjpg,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        title: "Bruschetta",
        price: 5.99,
        image: bruschettajpg,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasonsed with salt and olive oil.",

    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: 4.78,
        image: lemonDessertjpg,
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imaged.",
    }
]
export default Dishes
