function Products() {

  let initialState = {
    products: [
      {category: 'Category 1', name: 'Product 1', description: 'This is a description of Product 1', price: 1, inventoryCount: 1},
      {category: 'Category 2', name: 'Product 2', description: 'This is a description of Product 2', price: 2, inventoryCount: 2}
    ]
  }

  return (
    <div>
      <li>Product 1</li>
    </div>
  );
}

export default Products;