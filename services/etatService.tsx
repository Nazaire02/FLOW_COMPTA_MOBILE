import axiosInstance from "./axiosInstance";

export const getAllEtatClient= async () => {
    return axiosInstance.get('/etat-clients');
};

export const getAllEtatTresorerie = async () => {
    return axiosInstance.get('/etat-tresoreries');
};