import axiosInstance from "./axiosInstance";

export const getAllBanque= async () => {
    return axiosInstance.get('/banques');
};

export const getAllCaisse= async () => {
    return axiosInstance.get('/caisses');
};