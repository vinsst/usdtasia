import React from "react";

function QuickCurrDropItem({ name, onClick }) {
  return (
    <div className="quick__curency_dropdown_item" onClick={onClick}>
      {name}
    </div>
  );
}

export default QuickCurrDropItem;
