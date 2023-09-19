import { useState, useEffect, useRef} from "react"
import { Item1 } from "./Item1";
import { Link } from "react-router-dom";

export const ToShopList = () => {

  const getStoredItems = () => {
    const storedItems = localStorage.getItem("items1");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const [items, setItems] = useState(getStoredItems());
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("items1", JSON.stringify(items));
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
      <h2>TO SHOP LIST</h2>
      <div className="router-container">
       <Link to='/' className="link-1">HOME</Link>
       <Link to='/todo' className="link-1">TO DO LIST</Link>
      </div>
      <div>
        <form onSubmit={onSubmit} className="form" ref={inputRef}>
          <input
            type="text"
            name="item"
            placeholder="Something you need to shop..."
            className="input"
            required
          />
          <button className="button">Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item1 removeItem={removeItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}



