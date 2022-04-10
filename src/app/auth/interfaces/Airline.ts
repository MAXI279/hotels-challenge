export interface Airline {
  id: number;
  name: string;
  code: string;
  sign_in_available: boolean;
  sign_up_available: boolean;
  display_name: string;
  is_commercial: boolean;
  employee_number_required: boolean;
  partner: boolean;
  lang: string;
  currency: string;
  email_domains?: (string)[] | null;
  airline_blog_uri: string;
  white_label_url: string;
}
