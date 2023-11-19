import { ICity } from "./ICity";
import { IApartment } from "./IApartment";
import { IModalModule } from "./IModalModule";
import { IManager } from "./IManager";

export interface IState {
  modal: IModalModule;
  status: string;
  errorMessage: string;
  email: string;
  password: string;
  token: string;
  cities: ICity[];
  currentCity: ICity | "Все";
  sort: string[];
  currentSort: string;
  apartments: IApartment[];
  managers: IManager[];
}
