import axiosInstance from "./axiosInstance";

export const getAllOpComptable= async () => {
    return axiosInstance.get('/etat-clients');
};

export const getAllOpAnalytique = async () => {
    return axiosInstance.get('/etat-tresoreries');
};