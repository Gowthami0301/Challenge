import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';

const InventoryItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item._id);
  };

  return (
    <Tr>
      <Td>{item.itemName}</Td>
      <Td>{new Date(item.dateEntered).toLocaleDateString()}</Td>
      <Td>{item.enteredBy}</Td>
      <Td><Button onClick={handleDelete}>Delete</Button></Td>
    </Tr>
  );
};

export default InventoryItem;
