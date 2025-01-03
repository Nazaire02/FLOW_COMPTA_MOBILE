import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function saisies() {
  const [currentStep, setCurrentStep] = useState(1);
  const currentDate = new Date();
  const [operations, setOperations] = useState([
    { label: 'Opération 1', value: 'Opération1' },
    { label: 'Opération 2', value: 'Opération2' },
  ]);
  const [operationDropDown, setOperationDropDown] = useState(false);
  const [operationChoosed, setOperationChoosed] = useState(null);

  const [definedWriting, setDefinedWriting] = useState([
    { label: 'definedWriting 1', value: 'definedWriting1' },
    { label: 'definedWriting 2', value: 'definedWriting2' },
  ]);
  const [definedWritingDropDown, setDefinedWritingDropDown] = useState(false);
  const [definedWritingChoosed, setDefinedWritingChoosed] = useState(null);
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.heading}>Etape 1: Détails</Text>
            <TextInput style={styles.input} value='DC-KNOWING' readOnly={true} />
            <TextInput style={styles.input} value={`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`} readOnly={true} />
            <TextInput style={styles.input} value={`${currentDate.getHours()}:${currentDate.getMinutes()}`} readOnly={true} />
            <TextInput style={styles.input} value='0000111' readOnly={true} />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.heading}>Etape 2: Détails des opérations</Text>
            <DropDownPicker
              open={operationDropDown}
              value={operationChoosed}
              items={operations}
              setOpen={setOperationDropDown}
              setValue={setOperationChoosed}
              setItems={setOperations}
              style={styles.input}
              dropDownContainerStyle={styles.input}
              zIndex={3000}
              zIndexInverse={1000}
              placeholder="Nouvelle opération"
            />
            <DropDownPicker
              open={definedWritingDropDown}
              value={definedWritingChoosed}
              items={definedWriting}
              setOpen={setDefinedWritingDropDown}
              setValue={setDefinedWritingChoosed}
              setItems={setDefinedWriting}
              style={styles.input}
              dropDownContainerStyle={styles.input}
              zIndex={2000}
              zIndexInverse={2000}
              placeholder="Ecriture prédéfinie"
            />
            <TextInput style={styles.input} placeholder="Entrez la description de l'opération" />
            <TextInput style={styles.input} placeholder="Références - Pièce comptable" />
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.heading}>Etape 2: Operation Details</Text>
            <TextInput style={styles.input} placeholder="Operation Date" />
            <TextInput style={styles.input} placeholder="Total Debit" />
            <TextInput style={styles.input} placeholder="Total Credit" />
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add Account</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView style={styles.container}>
        <Text style={styles.stepper}>Etape {currentStep} sur 3</Text>
        <View>{renderStepContent()}</View>
        <View style={styles.navigation}>
          {currentStep > 1 && (
            <TouchableOpacity style={styles.navButton} onPress={() => setCurrentStep(currentStep - 1)}>
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
          )}
          {currentStep < 3 ? (
            <TouchableOpacity style={styles.navButton} onPress={() => setCurrentStep(currentStep + 1)}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  stepper: {
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 16,
  },
  stepContainer: {
    marginBottom: 32,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 8,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmationText: {
    fontSize: 16,
    color: 'black',
  },
  rowInput: {
    display: "flex",
    flexDirection: "row",
  },
  rowInputElement: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 2
  },
});
