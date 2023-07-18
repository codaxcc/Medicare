import { Appointment } from "./appoinment.model";

export interface SharedData {
    name: string;
    age: string;
    address: string;
    phone: string;
    datetime: Date;
    profileInfo: any;
    appointments: Appointment[];
  }

export { Appointment };

