/*const name = "parul"
const age = "43"

const user = {
    name,
    age,
    company: "IBM"
}

console.log(user.name)

const {company: companyName = "IBM"} = user
console.log(companyName)*/


const product = {
    label: "Red Book",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction ('order', product)
