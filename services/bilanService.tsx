import axiosInstance from "./axiosInstance";

export const getAllBilanSmt= async () => {
    return axiosInstance.get('/bilans');
};

export const getAllCompteResultat= async () => {
    return axiosInstance.get('/compte-resultat');
};