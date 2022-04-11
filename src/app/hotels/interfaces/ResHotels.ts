import { Hotels } from "./Hotels";

export interface ResHotels {
  hotels: Hotels[]
  meta: Meta
}

interface Meta {
  summary: any;
  trip_reason?: null;
  auto_dates?: null;
  page: number;
  start_date: string;
  end_date: string;
  test_groups?: null;
  experiment_variation?: null;
  request_info: any;
  total_pages: number;
}
