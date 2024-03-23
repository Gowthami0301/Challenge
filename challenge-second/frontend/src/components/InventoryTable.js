import React from 'react';
import { Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';
import InventoryItem from './InventoryItem';

const InventoryTable = ({ inventory, onDelete }) => {
  return (
    <Table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
      <Thead>
        <Tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <Th style={{ padding: '10px', textAlign: 'left' }}>Item Name</Th>
          <Th style={{ padding: '10px', textAlign: 'left' }}>Date Entered</Th>
          <Th style={{ padding: '10px', textAlign: 'left' }}>Entered By</Th>
          <Th style={{ padding: '10px', textAlign: 'left' }}>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {inventory.map(item => (
          <InventoryItem key={item._id} item={item} onDelete={onDelete} />
        ))}
      </Tbody>
    </Table>
  );
};

export default InventoryTable;
