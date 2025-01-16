import axiosInstance from "./axiosInstance";

export const getAllSuiviAssocie = async () => {
    return axiosInstance.get('/suivi-associes');
};

export const getAllSuiviImpaye = async () => {
    return axiosInstance.get('/suivi-impayes');
};

export const getAllSuiviTiers = async () => {
    return axiosInstance.get('/suivi-tiers');
};