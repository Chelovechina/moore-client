import { IApartment } from "./IApartment";
import { IManager } from "./IManager";

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
  managerChange: {
    isModalOpened: boolean;
    modalType: "Изменить данные менеджера";
    currentManager: IManager;
  };
  createManager: {
    isModalOpened: boolean;
    modalType: "Добавить менеджера";
    currentManager: any;
  };
}
