import axiosInstance from "./axiosInstance";

export const getAllPlanAnalytique = async () => {
    return axiosInstance.get('/plan-analytiques');
};

export const getAllPlanComptable = async () => {
    return axiosInstance.get('/plan-comptables');
};

export const getAllPlanTiers = async () => {
    return axiosInstance.get('/plan-tiers');
};