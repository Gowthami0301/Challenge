import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, Button } from '@chakra-ui/react';

const AddInventoryModal = ({ isOpen, onClose, onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [enteredBy, setEnteredBy] = useState('');

  const handleAddItem = () => {
    onAddItem(itemName, enteredBy);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent style={{ marginTop: '15%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <ModalCloseButton style={{ color: '#666', position: 'absolute', top: '10px', right: '10px' }} />
        <ModalHeader style={{ borderBottom: '1px solid #ddd', paddingBottom: '15px', marginBottom: '15px', textAlign: 'center' }}>Add Inventory Item</ModalHeader>
        <ModalBody>
          <Input placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} style={{ marginBottom: '15px', borderRadius: '6px', padding: '10px', border: '1px solid #ddd' }} />
          <Input placeholder="Entered By" value={enteredBy} onChange={(e) => setEnteredBy(e.target.value)} style={{ marginBottom: '15px', borderRadius: '6px', padding: '10px', border: '1px solid #ddd' }} />
        </ModalBody>
        <ModalFooter style={{ borderTop: '1px solid #ddd', paddingTop: '15px', marginTop: '15px', textAlign: 'center' }}>
          <Button colorScheme="blue" mr={3} onClick={handleAddItem} style={{ borderRadius: '6px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Add</Button>
          <Button onClick={onClose} style={{ borderRadius: '6px', padding: '10px 20px', backgroundColor: '#ddd', color: '#333', border: 'none' }}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  
  
};

export default AddInventoryModal;
