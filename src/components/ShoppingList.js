import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [itemD, setItemD] = useState(items)

  // const [newSub, setNewSub] = useState({itemName: "", itemCategory: ""})

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }
  function onItemFormSubmit(newItemToBeReceived){
    setItemD((items)=>[...items, newItemToBeReceived])
  }
  // log new list
  console.log(itemD);

  const itemsToDisplay = itemD
    .filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      return item.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onSearchChange={onSearchChange}
        searchInput={searchInput}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
