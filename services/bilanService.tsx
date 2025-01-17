import axiosInstance from "./axiosInstance";

export const getAllBilanSmt= async () => {
    return axiosInstance.get('/bilans');
};