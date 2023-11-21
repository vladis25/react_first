import React, { useState } from 'react';

import './addProductForm.css';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    imageUrl: '',
    category: '',
  });

  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.imageUrl || !product.category) {
      alert('Будь ласка, заповніть всі поля товару.');
      return;
    }

    const newProductId = new Date().getTime().toString();
    setProducts([...products, { ...product, id: newProductId }]);
    setProduct({ id: '', name: '', price: '', imageUrl: '', category: '' });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='name'>
          <label>Назва товару:</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div className='name'>
          <label>Ціна товару:</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div className='name'>
          <label>URL зображення:</label>
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} />
        </div>
        <div >
          <label>Категорія товару:</label>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="electronics"
                checked={product.category === 'electronics'}
                onChange={handleInputChange}
              />
              Електроніка
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="clothing"
                checked={product.category === 'clothing'}
                onChange={handleInputChange}
              />
              Одяг
            </label>
          </div>
        </div>
        <button type="submit">Додати товар</button>
      </form>

      <div>
        <h3>Список товарів</h3>
        <ul className='list'>
          {products.map((p) => (
            <li key={p.id}>
              <img src={p.imageUrl} alt={p.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              {p.name} - {p.price}$ - {p.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProductForm;
