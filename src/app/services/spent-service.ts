import {Injectable} from '@angular/core';
import apiExpenseControl from "./api-expense-control";
import {AxiosResponse} from "axios";
import {SpentRequest, SpentResponse} from "../models/spent.model";

@Injectable()
export class SpentService {

  constructor() {}

  getExpense(): Promise<AxiosResponse<Array<SpentResponse>>> {
    return apiExpenseControl.get('');
  }

  getSpent(id: number): Promise<AxiosResponse<SpentResponse>> {
    return apiExpenseControl.get(`/${id}`);
  }

  createSpent(request: SpentRequest): Promise<AxiosResponse<SpentResponse>> {
    return apiExpenseControl.post('', request);
  }

  updateSpent(id: number, request: SpentRequest): Promise<AxiosResponse<SpentResponse>> {
    return apiExpenseControl.put(`/${id}`, request);
  }

  deleteSpent(id: number | undefined): Promise<AxiosResponse<any>> {
    return apiExpenseControl.delete(`/${id}`);
  }
}
