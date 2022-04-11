import { Moment } from "moment";

export interface HotelSearchInterface {
  travellers: number,
  destination: string,
  start: Moment,
  end: Moment,
  page: number
}
