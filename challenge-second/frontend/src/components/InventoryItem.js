import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';

const InventoryItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item._id);
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Tr style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <Td style={{ padding: '12px 16px', fontSize: '16px' }}>{item.itemName}</Td>
      <Td style={{ padding: '12px 16px', fontSize: '16px' }}>{new Date(item.dateEntered).toLocaleDateString()}</Td>
      <Td style={{ padding: '12px 16px', fontSize: '16px' }}>{item.enteredBy}</Td>
      <Td style={{ padding: '12px 16px' }}>
        <Button style={buttonStyle} onClick={handleDelete}>Delete</Button>
      </Td>
    </Tr>
  );
};

export default InventoryItem;
