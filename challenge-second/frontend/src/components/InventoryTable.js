import React from 'react';
import { Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';
import InventoryItem from './InventoryItem';

const InventoryTable = ({ inventory, onDelete }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Item Name</Th>
          <Th>Date Entered</Th>
          <Th>Entered By</Th>
          <Th>Delete</Th>
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
