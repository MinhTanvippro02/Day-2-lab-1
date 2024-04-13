const listItem = [
  { name: "San pham 1", price: 500, description: "San pham" },
  { name: "San pham 2", price: 200, description: "San pham" },
  { name: "San pham 3", price: 100, description: "San pham" },
];

const listItemEl = document.getElementById("list-item");
const array = listItem.map((el, index) => {
  const h1 = document.createElement("h1");
  h1.innerHTML = el.name;
  const p = document.createElement("p");
  p.innerHTML = el.price;
  p.style.color = el.price === 500 ? "red" : "black"; // Set color based on the price
  const item = document.createElement("div");
  item.appendChild(h1);
  item.appendChild(p);
  listItemEl.appendChild(item);
  return item;
});
