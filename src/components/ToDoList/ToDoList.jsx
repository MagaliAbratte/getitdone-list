import { useState, useEffect, useRef } from "react"
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ToDoList = () => {

  const getStoredItems = () => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const [items, setItems] = useState(getStoredItems());
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  
  function removeItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }
  
  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    inputRef.current.reset();
  }
  
  return (
    <div className="list-container">
      <h2>TO DO LIST</h2>
      <div className="router-container">
       <Link to='/' className="link-1">HOME</Link>
       <Link to='/toshop' className="link-1">SHOP LIST</Link>
      </div>
      <div>
        <form onSubmit={onSubmit} className="form" ref={inputRef}>
          <input
            type="text"
            name="item"
            placeholder="Something you need to do..."
            className="input"
            required
          />
          <button  className="button">Add</button>
        </form>
        <ul className="item-list">
          {items.map((item, index) => (
            <Item removeItem={removeItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}



