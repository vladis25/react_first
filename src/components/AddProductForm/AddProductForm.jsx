import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input';

import './addProductForm.css';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    imageUrl: '',
  });

  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.imageUrl) {
      alert('Заповніть всі поля товару.');
      return;
    }

    const newProductId = new Date().getTime().toString();

    setProducts([...products, { ...product, id: newProductId }]);

    setProduct({ id: '', name: '', price: '', imageUrl: '' });
  };

  return (
    <div>
      <h2>Форма додавання товару</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input label='Назва товару:' type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <Input name="price" label="Ціна товару: " placeholder="Enter Price" onChange={handleInputChange} value={product.price} />
        </div>
        <div>
          <Input label='URL зображення:' type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} />
        </div>
        <Button variant='primary' type="submit">Додати товар</Button>
      </form>

      <div>
        <h3>Список товарів</h3>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <img src={p.imageUrl} alt={p.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              {p.name} - {p.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProductForm;
