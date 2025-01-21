import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Pressable, Alert, ScrollView, Switch } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import { getAllTypeTiers } from '@/services/planService';
import { TypeTiers } from '@/class/typeTiers';

export default function AddPlanComptable({ modalVisible, setModalVisible }: any) {
    const [typeTiersOpen, setTypeTiersOpen] = useState(false);
    const [typeTiersValue, setTypeTiersValue] = useState(null);
    const [typeTiersItems, setTypeTiersItems] = useState<{libel: string, value:string}[]>([]);

    const [planComptableOpen, setPlanComptableOpen] = useState(false);
    const [planComptableValue, setPlanComptableValue] = useState(null);
    const [planComptableItems, setPlanComptableItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
    ]);

    const validationSchema = Yup.object().shape({
        numeroCompte: Yup.string().required('Numéro de compte est requis'),
        intitule: Yup.string().required('Intitulé est requis'),
        typeTiers: Yup.string().required('Type de tiers est requis'),
        planComptable: Yup.string().required('Plan comptable est requis'),
        extraitCompte: Yup.string(),
        traitementAnalytique: Yup.string()
    });

    const handleFormSubmit = (values: any) => {
        Alert.alert('Données soumises', JSON.stringify(values, null, 2));
        setModalVisible(false);
    };

    async function getTypeTiers() {
        try {
            const resp = await getAllTypeTiers();
            const items = resp.data.data.map((tier: TypeTiers) => ({
                label: tier.libelle,
                value: tier.id, 
            }));
            setTypeTiersItems(items);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getTypeTiers()
    }, [])
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Créer un nouveau Numéro de Plan Comptable</Text>
                    <Formik
                        initialValues={{
                            numeroCompte: '',
                            intitule: '',
                            typeTiers: '',
                            planComptable: '',
                            extraitCompte: 'false',
                            traitementAnalytique: 'false'
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Numéro du Compte"
                                    onChangeText={handleChange('numeroCompte')}
                                    onBlur={handleBlur('numeroCompte')}
                                    value={values.numeroCompte}
                                />
                                {touched.numeroCompte && errors.numeroCompte && (
                                    <Text style={styles.errorText}>{errors.numeroCompte}</Text>
                                )}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Intitulé"
                                    onChangeText={handleChange('intitule')}
                                    onBlur={handleBlur('intitule')}
                                    value={values.intitule}
                                />
                                {touched.intitule && errors.intitule && (
                                    <Text style={styles.errorText}>{errors.intitule}</Text>
                                )}
                                <DropDownPicker
                                    open={typeTiersOpen}
                                    value={typeTiersValue}
                                    items={typeTiersItems}
                                    setOpen={setTypeTiersOpen}
                                    setValue={setTypeTiersValue}
                                    setItems={setTypeTiersItems}
                                    style={[styles.input, {marginBottom:10}]}
                                    dropDownContainerStyle={styles.input}
                                    zIndex={3000}
                                    zIndexInverse={1000}
                                    placeholder="Type tiers"
                                />

                                <DropDownPicker
                                    open={planComptableOpen}
                                    value={planComptableValue}
                                    items={planComptableItems}
                                    setOpen={setPlanComptableOpen}
                                    setValue={setPlanComptableValue}
                                    setItems={setPlanComptableItems}
                                    style={[styles.input, {marginBottom:10}]}
                                    dropDownContainerStyle={styles.input}
                                    zIndex={2000}
                                    zIndexInverse={2000}
                                    placeholder="Plan comptable"
                                />
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.checkboxLabel}>Extrait de Compte</Text>
                                    <Switch
                                        onValueChange={(value) => handleChange('extraitCompte')(value.toString())}
                                        value={values.extraitCompte === 'true'}
                                    />
                                </View>

                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.checkboxLabel}>Traitement Analytique</Text>
                                    <Switch
                                        onValueChange={(value) => handleChange('traitementAnalytique')(value.toString())}
                                        value={values.traitementAnalytique === 'true'}
                                    />
                                </View>

                                <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit}>
                                    <Text style={styles.submitButtonText}>Enregistrer</Text>
                                </TouchableOpacity>

                                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.closeButtonText}>Fermer</Text>
                                </Pressable>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#FFD700',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        textAlign: 'center',
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 12,
        backgroundColor: '#FFF',
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
    submitButton: {
        backgroundColor: '#28A745',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#DC3545',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});