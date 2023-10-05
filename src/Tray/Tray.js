import "./Tray.css";
import Item from "../Item/Item";
import electronics from "../data/ElectronicsData";
import fashion from "../data/FashionData";
import furnitures from "../data/FurnitureData";

function Tray({
  overallQuant,
  handleOverallQuant,
  totalAmount,
  setAmt,
}) {
  const handleTotalAmount = (obj, val) => {
    var oldAmount = obj.price * obj.quantity;
    var newAmount = obj.price * val;
    var netChange = totalAmount - oldAmount + newAmount;
    setAmt(netChange);
    obj.quantity = val;
  };

  return (
    <div>
      <div className="tray-container">
        <h1>Best of Electronics</h1>
        <div className="tray-items">
          {electronics.map((obj) => {
            return (
              <Item
                key={obj.id}
                label={obj.label}
                image={obj.image}
                price={obj.price}
                quantity={obj.quantity}
                setVal={(val) => handleTotalAmount(obj, val)}
                overallQuant={overallQuant}
                handleOverallQuant={(val) => handleOverallQuant(val)}
              />
            );
          })}
        </div>
      </div>
      <div className="tray-container">
        <h1>Best of Fashion</h1>
        <div className="tray-items">
          {fashion.map((obj) => {
            return (
              <Item
                key={obj.id}
                label={obj.label}
                image={obj.image}
                price={obj.price}
                quantity={obj.quantity}
                setVal={(val) => handleTotalAmount(obj, val)}
                overallQuant={overallQuant}
                handleOverallQuant={(val) => handleOverallQuant(val)}
              />
            );
          })}
        </div>
      </div>
      <div className="tray-container">
        <h1>Best of Electronics</h1>
        <div className="tray-items">
          {furnitures.map((obj) => {
            return (
              <Item
                key={obj.id}
                label={obj.label}
                image={obj.image}
                price={obj.price}
                quantity={obj.quantity}
                setVal={(val) => handleTotalAmount(obj, val)}
                overallQuant={overallQuant}
                handleOverallQuant={(val) => handleOverallQuant(val)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tray;
