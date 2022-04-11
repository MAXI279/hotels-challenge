export interface Hotels {
  id: string;
  name: string;
  location: Location;
  chain: string;
  subtotal?: null;
  checkin: string;
  checkout: string;
  promotions?: (PromotionsEntity)[] | null;
  feature: Feature;
  amenities?: null;
  nights: number;
  position: number;
  id90: string;
  displayable_id: string;
  ratings?: null;
  star_rating: number;
  review_rating: number;
  display_rate: number;
  display_rate_with_promo?: null;
  total: number;
  image: string;
  images?: null;
  description?: null;
  location_description: string;
  discount_promotion?: null;
  accommodation_type: AccommodationType;
  neighborhood_ids?: (number)[] | null;
  retail_rate?: null;
  savings_amount?: null;
  savings_percent?: null;
  other_sites_prices?: null;
  distance: number;
  distance_to_airport?: null;
  distance_to_airports: DistanceToAirports;
  number_of_rooms: number;
  total_discount_amount?: null;
  surcharges?: null;
  taxes_and_fees?: null;
  payment_date?: null;
  payment_option?: null;
  token_store?: null;
  supplier_special_rate_type?: null;
  experiment_variation: ExperimentVariation;
}
export interface Location {
  city: string;
  country: string;
  state?: null;
  region?: null;
  latitude: number;
  longitude: number;
  description: string;
}
export interface PromotionsEntity {
  key: string;
  type: string;
  name: string;
  message: string;
  discountPromotion: boolean;
}
export interface Feature {
  booking_count: number;
  latest_booking_date: string;
  viewing_count: number;
  latest_viewing_date: string;
  conversion_score: number;
  ranking_score: number;
  revenue_score: number;
  geography_score: number;
  rate_stats_factor: number;
  best_seller_rank: number;
}
export interface AccommodationType {
  id: number;
  type: string;
}
export interface DistanceToAirports {
  CUN: number;
  CZM: number;
}
export interface ExperimentVariation {
  pricing: Pricing;
}
export interface Pricing {
  markup: string;
}
