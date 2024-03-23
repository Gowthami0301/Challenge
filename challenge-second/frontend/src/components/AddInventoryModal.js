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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Inventory Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          <Input placeholder="Entered By" value={enteredBy} onChange={(e) => setEnteredBy(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddItem}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddInventoryModal;
