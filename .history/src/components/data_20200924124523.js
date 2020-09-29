import podsTeal from "../images/podsteal.png"
import podsGrey from "../images/podsgrey.png"
import podsRed from "../images/podsred.png"

const Pods = [
    {
    title: 'red', 
    description: 'The Lite.weight in Red is a great addition to your wardrobe.', 
    hex: '#9B1E1E',
    img: podsRed,
    price: '40',
    stock: '5'
    },
    {
    title: 'grey', 
    description: 'The Lite.weight in Grey is a great addition to your wardrobe.', 
    hex: '#707070',
    img: podsGrey,
    price: '40',
    stock: '5'
    },
    {
    title: 'teal', 
    description: 'The Lite.weight in Teal is a great addition to your wardrobe.', 
    hex: '#1B6470', 
    img: podsTeal,
    price: '40',
    stock: '5'
    }
  
]

const Quotes = [
    'Every Moment is a Fresh Beginning', 
    'The beginning is always NOW.', 
    'There are 7 days in a week and Someday is none of them.', 
    'You dont have to be great to start, but you do have to start to be great'
]

export default {Pods, Quotes}