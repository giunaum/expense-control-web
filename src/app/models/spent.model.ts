export interface SpentResponse {
  id?: number;
  personName?: string;
  description?: string;
  dateTime?: Date;
  amount?: number;
  tags?: string;
}

export interface SpentRequest {
  personName?: string;
  description?: string;
  dateTime?: Date;
  amount?: number;
  tags?: string;
}
