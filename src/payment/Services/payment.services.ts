import { Injectable } from "@nestjs/common";
import { Payment } from '../Models/payment.model'
import { PaymentStatus } from "../Enum/payment.enum";

@Injectable()
export class PaymentServices {
    private payments: Payment[] =[]

    create(description: string, amount: number, status: PaymentStatus) {
        const payment = new Payment(description, amount, status)
        this.payments.push(payment)
        return payment
    }

    findAll() {
        return this.payments
    }

    findById(id: string) {
        return this.payments.find(payment => payment.id === id)
    }
}