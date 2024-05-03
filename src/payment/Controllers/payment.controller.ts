import { Controller, Get, Param, Post, Body, HttpStatus } from "@nestjs/common";
import { PaymentServices } from "../Services/payment.services";
import { PaymentStatus } from "../Enum/payment.enum";

@Controller("payments")
export class PaymentController {
    constructor(private readonly paymentServices: PaymentServices) { }

    @Post()
    create(@Body() paymentData: { description: string, amount: number, status: PaymentStatus }) {
        const createdPayment = this.paymentServices.create(paymentData.description, paymentData.amount, paymentData.status);
        return {
            status: HttpStatus.CREATED,
            data: createdPayment,
            message: 'Payment created successfully'
        };
    }

    @Get()
    findAll() {
        return this.paymentServices.findAll()
    }

    @Get(":id")
    findById(@Param('id') id: string) {
        const payment = this.paymentServices.findById(id)
        if (!payment) {
            return {
                status: HttpStatus.NOT_FOUND,
                message: 'Payment not found'
            }
        } else {
            return {
                status: HttpStatus.OK,
                data: payment
            }
        }
    }
}