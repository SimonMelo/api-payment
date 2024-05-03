import { Module } from "@nestjs/common";
import { PaymentController } from "./payment/Controllers/payment.controller";
import { PaymentServices } from "./payment/Services/payment.services";

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [PaymentServices]
})

export class AppModule {}