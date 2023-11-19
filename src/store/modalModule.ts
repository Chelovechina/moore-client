import { IModalModule } from "@/types/IModalModule";
import { IApartment } from "@/types/IApartment";
import { IManager } from "@/types/IManager";

export default {
  state: {
    apartmentChange: {
      isModalOpened: false,
      modalType: "Изменить",
      currentApartment: {} as IApartment,
    },
    createApartment: {
      isModalOpened: false,
      modalType: "Добавить квартиру",
      currentApartment: {} as IApartment,
    },
    managerChange: {
      isModalOpened: false,
      modalType: "Изменить данные менеджера",
      currentManager: {} as IManager,
    },
    createManager: {
      isModalOpened: false,
      modalType: "Добавить менеджера",
      currentManager: {} as IManager,
    },
  },
  getters: {},
  mutations: {
    setCurrentApartmentNumber: (state: IModalModule, number: number) => {
      state.createApartment.currentApartment.number = number;
    },
    setCurrentFloor: (state: IModalModule, floor: number) => {
      state.createApartment.currentApartment.floor = floor;
    },
    setCurrentSqm: (state: IModalModule, sqm: number) => {
      state.createApartment.currentApartment.sqm = sqm;
    },
    setCurrentPrice: (state: IModalModule, price: number) => {
      state.createApartment.currentApartment.price = price;
    },
    setCurrentCreateStatus: (state: IModalModule, status: string) => {
      state.createApartment.currentApartment.status = status;
    },
    setCurrentManager: (state: IModalModule, manager: IManager) => {
      state.managerChange.currentManager = manager;
    },
    setCurrentCreateManager: (state: IModalModule, manager: IManager) => {
      state.createManager.currentManager = manager;
    },
    toggleIsModalOpen: (state: IModalModule) => {
      state.apartmentChange.isModalOpened =
        !state.apartmentChange.isModalOpened;
    },
    toggleIsCreateModalOpen: (state: IModalModule) => {
      state.createApartment.isModalOpened =
        !state.createApartment.isModalOpened;
    },
    toggleIsManagerModalOpen: (state: IModalModule) => {
      state.managerChange.isModalOpened = !state.managerChange.isModalOpened;
    },
    toggleIsCreateManagerModalOpen: (state: IModalModule) => {
      state.createManager.isModalOpened = !state.createManager.isModalOpened;
    },
    setCurrentApartment: (state: IModalModule, apartment: IApartment) => {
      state.apartmentChange.currentApartment = apartment;
    },
    setCurrentApartmentName: (state: IModalModule, clientName: string) => {
      state.apartmentChange.currentApartment.clientName = clientName;
    },
    setCurrentAgreement: (state: IModalModule, agreement: number) => {
      state.apartmentChange.currentApartment.agreement = agreement;
    },
    setCurrentStatus: (state: IModalModule, status: string) => {
      state.apartmentChange.currentApartment.status = status;
    },
    setCurrentApartmentPhoneNumber: (
      state: IModalModule,
      phoneNumber: string
    ) => {
      state.apartmentChange.currentApartment.clientPhoneNumber = phoneNumber;
    },
    clearCurrentApartment: (state: IModalModule) => {
      state.apartmentChange.currentApartment = {} as IApartment;
    },
    clearCurrentCreateApartment: (state: IModalModule) => {
      state.createApartment.currentApartment = {} as IApartment;
      state.createApartment.isModalOpened = false;
    },
    setCurrentName: (state: IModalModule, name: string) => {
      state.managerChange.currentManager.name = name;
    },
    setCurrentEmail: (state: IModalModule, email: string) => {
      state.managerChange.currentManager.email = email;
    },
    setCurrentPhoneNumber: (state: IModalModule, phoneNumber: string) => {
      state.managerChange.currentManager.phoneNumber = phoneNumber;
    },
    setCurrentCreateName: (state: IModalModule, name: string) => {
      state.createManager.currentManager.name = name;
    },
    setCurrentCreateEmail: (state: IModalModule, email: string) => {
      state.createManager.currentManager.email = email;
    },
    setCurrentCreatePhoneNumber: (state: IModalModule, phoneNumber: string) => {
      state.createManager.currentManager.phoneNumber = phoneNumber;
    },
    clearCurrentCreateManager: (state: IModalModule) => {
      state.createManager.isModalOpened = false;
      state.createManager.currentManager = {};
    },
    setCurrentPassword: (state: IModalModule, password: string) => {
      state.createManager.currentManager.password = password;
    },
  },
  actions: {},
  modules: {},
};
