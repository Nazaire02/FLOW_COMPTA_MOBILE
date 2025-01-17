import axiosInstance from "./axiosInstance";

export const getAllOpComptable= async () => {
    return axiosInstance.get('/operations-comptables');
};

export const getAllOpAnalytique = async () => {
    return axiosInstance.get('/etat-tresoreries');
};