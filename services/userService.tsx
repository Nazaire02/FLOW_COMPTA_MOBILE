import axiosInstance from "./axiosInstance";

export const login = async (data:any) => {
    return axiosInstance.post('/login', data);
};

export const update = async (data:any) => {
    return axiosInstance.patch('/users/update', data);
};