import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import AddInventoryModal from './AddInventoryModal';
import InventoryTable from './InventoryTable';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory')
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAddItem = (itemName, enteredBy) => {
    axios.post('http://localhost:5000/inventory', { itemName, enteredBy })
      .then(res => {
        setInventory([...inventory, res.data]);
      })
      .catch(err => console.log(err));
  };

  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:5000/inventory/${id}`)
      .then(() => setInventory(inventory.filter(item => item._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Add Item</Button>
      <AddInventoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddItem={handleAddItem} />
      <InventoryTable inventory={inventory} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
