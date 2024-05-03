import { PaymentStatus } from "../Enum/payment.enum";

export class Payment {
    id: string;
    description: string;
    amount: number;
    status: PaymentStatus;
  
    constructor(description: string, amount: number, status: PaymentStatus) {
      this.id = this.generateId();
      this.description = description;
      this.amount = amount;
      this.status = status;
    }
  
    private generateId(): string {
      // Lógica para gerar um ID único, por exemplo, usando o pacote uuid
      return Math.random().toString(36).slice(2, 9); // Exemplo simples de geração de ID
    }
}
