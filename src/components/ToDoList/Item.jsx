
export const Item = ({item, removeItem}) => {
    return (
      <div className="item-container">
        <div className="item-word">
        {item}
        </div>
      <button className="item-button" onClick={() => removeItem(item)}>
        x
      </button>
    </div>
    )
  }
