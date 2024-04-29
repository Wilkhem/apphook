import React, { useState, useEffect } from 'react';
import { TextInput, Button, View, Text, Modal } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (name) {
      setShowModal(true);
    }
  };

  const handlePress = () => {
    setName('');
    setShowModal(false);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, marginTop: 20 }}
        value={name}
        onChangeText={handleNameChange}
        onSubmitEditing={handleSubmit}
        placeholder="Ingresa tu nombre"
      />
      <Button title="Limpiar nombre" onPress={handlePress} />
      <Modal visible={showModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>¡Hola, {name}!</Text>
          <Button title="Cerrar" onPress={handlePress} />
        </View>
      </Modal>
    </View>
  );
};

export default App;