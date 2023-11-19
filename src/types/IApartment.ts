export interface IApartment {
  _id: string;
  number: number;
  cityId: string;
  floor: number;
  sqm: number;
  status: string;
  price: number;
  clientName: string;
  clientPhoneNumber: string;
  agreement: number;
  statusMessage: string;
  createdAt: Date;
}
