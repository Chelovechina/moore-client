import { IApartment } from "./IApartment";

export interface IModalModule {
  isModalOpened: boolean;
  apartmentChange: { modalType: "Изменить"; currentApartment: IApartment };
}
