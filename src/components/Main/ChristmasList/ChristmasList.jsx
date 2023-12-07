import React from "react";
import ChristmasWish from '../ChristmasWish'
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

const ChristmasList = () => {
  
  const initialData = [{
  title:"Calcetines navideños",
  price:10,
  url:"https://r.rp-static.com/r/catalog/public/8ca88a0deef8f716c0e9131bcb489f80ee2e05e3/558/desktop.jpg"
},
{
  title:"Nuevo libro Brandon Sanderson",
  price:15,
  url:"https://imagessl0.casadellibro.com/a/l/s5/00/9788418037900.webp"
},
{
  title:"Jersey",
  price:22,
  url:"https://qmode.es/wp-content/uploads/2016/12/6a668901063c7ef50b4fc1e48a3b6b88-255x300.jpg"
}
]

const [data, setData] = useState({}); // Deseo actual
const [list, setList] = useState(initialData); // [{}, {}, {}] => Lista de deseos

const crearDeseo = () => {
  alert("Pide tus deseos")
  const title = prompt("Introduce regalo");
  const price = prompt("Introduce precio");
  const url = prompt("Introduce url de imagen");
  const myProduct = {title, price, url}

  setData(myProduct); // {deseo}
  setList([...list, myProduct]); // [{}, {}, {}] => Lista de deseos
}

const clearWishes = () => {
  setList([])
}

const resetWishes = () => {
  setList(initialData)
}

const deleteWish = (i) => {
  const remainingWishes = list.filter((wish, j) => i !== j);
  setList(remainingWishes)
}

const pintarDeseo = () => {
  return list.map((product, i) => (
  <ChristmasWish 
    key={uuidv4()} 
    title={product.title} 
    price={product.price} 
    url={product.url} 
    deleteWish={() => deleteWish(i)} />)
)}

const handleSubmit = (e) => {
  e.preventDefault()
  const title = e.target.title.value
  const price = e.target.price.value
  const url = e.target.url.value
  const myProduct = {title, price, url}

  const confirmed = confirm(`¿Desea crear este producto: ${title}, precio: ${price}? `)
  if (confirmed) {
    setData(myProduct); // {deseo}
    setList([...list, myProduct]); // [{}, {}, {}] => Lista de deseos
    alert("Deseo concedido")
  } else {
    alert("Deseo cancelado")
  }

}

return (
  <>
    <h2>Lista de deseos</h2>
    <button onClick={crearDeseo}>Pide tu deseo</button>
    <button onClick={clearWishes}>Limpiar lista de deseos</button>
    <button onClick={resetWishes}>Resetear lista de deseos</button>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Título</label><br />
      <input type="text" name="title" /><br />

      <label htmlFor="price">Precio</label><br />
      <input type="number" name="price" /><br />

      <label htmlFor="url">URL imagen</label><br />
      <input type="url" name="url"/><br />

      <button type="submit">Send</button>
    </form>
    
    <section>
      {pintarDeseo()}
    </section>
  </>)
};

export default ChristmasList;
