import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    // call our function prop
    onItemFormSubmit(newItem)
    // update state
    setItemName("")
    setItemCategory("Produce")
  }



  function handleItem(e) {
    setItemName((item) => item = e.target.value)
  }
  function handleCategory(e) {
    setItemCategory((category) => category = e.target.value)
  }
  return (
    <form required className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleItem} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
