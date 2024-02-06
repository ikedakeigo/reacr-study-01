import { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
       filterText={filterText}
       inStockOnly={inStockOnly}
       onFilterTextChange={setFilterText}
       onInStockChange={setInStockOnly}
       />

      <ProductTable
      products={products}
      filterText={filterText}
      inStockOnly={inStockOnly} />
    </div>
  );
}


function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(
    <ProductRow
    product={product}
    key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange
}) {
  return (
    <form>
      <input
      type="text"
      value={filterText}
      placeholder="Search.."
      onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockChange(e.target.checked)}
        />
        {""}
        only show products in stock
        （在庫のある商品のみを表示します）
      </label>
    </form>
  );
}


const PRODUCTS = [
  { category: "Frutis", price: "$1", stocked: true, name: "Apple" },
  { category: "Frutis", price: "$2", stocked: false, name: "Banana" },
  { category: "Vegetables", price: "$3", stocked: true, name: "Carrot" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Daikon" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}



// propsとstateの違い
