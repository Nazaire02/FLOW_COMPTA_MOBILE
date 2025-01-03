import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Button, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Colors } from '@/constants/Colors';

export default function saisies() {
  const [rows, setRows] = useState([
    { id: 1, generalAccount: "", thirdPartyAccount: "", debit: "", credit: "", analytic: "Oui" },
  ]);
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

  const [fileChoosed, setFileChoosed] = useState('');

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, generalAccount: "", thirdPartyAccount: "", debit: "", credit: "", analytic: "Oui" },
    ]);
  };
  const removeRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });
      setFileChoosed(result.assets[0].name);
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };
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
            <View style={styles.uploadContainer}>
              <Pressable style={styles.uploadButton} onPress={pickDocument}>
                <Text style={styles.uploadButtonText}>Parcourir...</Text>
              </Pressable>
              <View style={{ justifyContent: "center", paddingLeft: 10 }}>
                <Text>
                  {!fileChoosed
                    ? "Aucun fichier sélectionné"
                    : fileChoosed.length > 27
                      ? `${fileChoosed.slice(0, 27)}...`
                      : fileChoosed}
                </Text>
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.heading}>Etape 3: Saisie de l'opération</Text>
            <TextInput style={styles.input} placeholder="Date de l'opération" />
            <TextInput style={styles.input} placeholder="Total Débit" />
            <TextInput style={styles.input} placeholder="Total Crédit" />
            <Text style={styles.sectionTitle}>Détails Opération</Text>
            {rows.map((row, index) => (
              <View key={index} style={styles.sectionContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Compte Général"
                  placeholderTextColor="#aaa"
                  value={row.generalAccount}
                  onChangeText={(text) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, generalAccount: text } : r
                      )
                    )
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Compte de Tiers"
                  placeholderTextColor="#aaa"
                  value={row.thirdPartyAccount}
                  onChangeText={(text) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, thirdPartyAccount: text } : r
                      )
                    )
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Débit"
                  placeholderTextColor="#aaa"
                  keyboardType="numeric"
                  value={row.debit}
                  onChangeText={(text) =>
                    setRows(
                      rows.map((r) => (r.id === row.id ? { ...r, debit: text } : r))
                    )
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Crédit"
                  placeholderTextColor="#aaa"
                  keyboardType="numeric"
                  value={row.credit}
                  onChangeText={(text) =>
                    setRows(
                      rows.map((r) => (r.id === row.id ? { ...r, credit: text } : r))
                    )
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Analytique"
                  placeholderTextColor="#aaa"
                  value={row.analytic}
                  onChangeText={(text) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, analytic: text } : r
                      )
                    )
                  }
                />
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => removeRow(row.id)}
                  >
                    <Text style={{ fontWeight: "bold" }}>Annuler</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={addRow}>
              <Text style={styles.addButtonText}>Ajouter une ligne</Text>
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
              <Text style={styles.navButtonText}>Retour</Text>
            </TouchableOpacity>
          )}
          {currentStep < 3 ? (
            <TouchableOpacity style={styles.navButton} onPress={() => setCurrentStep(currentStep + 1)}>
              <Text style={styles.navButtonText}>Suivant</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Valider</Text>
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
    flex:1,
    paddingBottom:70,
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
  uploadContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.light.tint,
    height: 47,
    borderRadius: 8,
  },
  fileInfo: {
    marginVertical: 10,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "#FFD700",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  uploadButtonText: {
    color: "#FFF"
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
  },
  sectionContainer: {
    borderWidth: 1,
    borderColor: Colors.light.tint,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10
  },
  deleteButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 10,
    padding: 10,
  }
});
