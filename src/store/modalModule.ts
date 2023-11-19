import { IModalModule } from "@/types/IModalModule";
import { IApartment } from "@/types/IApartment";

export default {
  state: {
    apartmentChange: {
      isModalOpened: false,
      modalType: "Изменить",
      currentApartment: {},
    },
    createApartment: {
      isModalOpened: false,
      modalType: "Добавить квартиру",
      currentApartment: {} as IApartment,
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
    toggleIsModalOpen: (state: IModalModule) => {
      state.apartmentChange.isModalOpened =
        !state.apartmentChange.isModalOpened;
    },
    toggleIsCreateModalOpen: (state: IModalModule) => {
      state.createApartment.isModalOpened =
        !state.createApartment.isModalOpened;
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
  },
  actions: {},
  modules: {},
};
