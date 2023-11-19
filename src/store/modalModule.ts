import { IModalModule } from "@/types/IModalModule";
import { IApartment } from "@/types/IApartment";

export default {
  state: {
    isModalOpened: false,
    apartmentChange: {
      modalType: "Изменить",
      currentApartment: {},
    },
  },
  getters: {},
  mutations: {
    toggleIsModalOpen: (state: IModalModule) => {
      state.isModalOpened = !state.isModalOpened;
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
  },
  actions: {},
  modules: {},
};
