import { IApartment } from "./IApartment";

export interface IModalModule {
  apartmentChange: {
    isModalOpened: boolean;
    modalType: "Изменить";
    currentApartment: IApartment;
  };
  createApartment: {
    isModalOpened: boolean;
    modalType: "Добавить квартиру";
    currentApartment: any;
  };
}
