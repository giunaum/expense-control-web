import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {SpentService} from "./services/spent-service";
import {SpentResponse} from "./models/spent.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    ConfirmationService,
    MessageService,
    SpentService
  ]
})
export class AppComponent implements OnInit {

  spentDialog: boolean = false;
  expense: SpentResponse[] = [];
  spent: SpentResponse = {};
  submitted: boolean = false;

  constructor(
    private _spentService: SpentService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this._spentService.getExpense()
      .then(response => this.expense = response.data)
      .catch(error => console.error(error.data));
  }

  openNew() {
    this.spent = {};
    this.submitted = false;
    this.spentDialog = true;
  }

  editSpent(spent: SpentResponse) {
    this.spent = {...spent};
    this.spentDialog = true;
  }

  deleteSpent(spent: SpentResponse) {
    this._confirmationService.confirm({
      message: 'Tem certeza que quer excluir este gasto?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._spentService.deleteSpent(this.spent.id)
          .then(() => {
            this.expense = this.expense.filter(val => val.id !== spent.id);
            this.spent = {};
            this._messageService.add({severity:'success', summary: 'Successful', detail: 'Gasto excluído', life: 3000});
          }).catch(error => console.error(error.data));
      }
    });
  }

  hideDialog() {
    this.spentDialog = false;
    this.submitted = false;
  }

  saveSpent() {
    this.submitted = true;

    if (this.spent.personName) {
      if (this.spent.id) {
        this._spentService.updateSpent(this.spent.id, this.spent)
          .then(response => {
            this.spent = response.data;
            this.expense[this.findIndexById(this.spent.id)] = this.spent;
            this._messageService.add({severity:'success', summary: 'Successful', detail: 'Gasto atualizado', life: 3000});
          }).catch(error => console.error(error.data));
      }
      else {
        this._spentService.createSpent(this.spent)
          .then(response => {
            this.spent = response.data;
            this.expense.push(this.spent);
            this._messageService.add({severity:'success', summary: 'Successful', detail: 'Gasto criado', life: 3000});
          });
      }

      this.expense = [...this.expense];
      this.spentDialog = false;
      this.spent = {};
    }
  }

  findIndexById(id: number | undefined): number {
    let index = -1;

    for (let i = 0; i < this.expense.length; i++) {
      if (this.expense[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
