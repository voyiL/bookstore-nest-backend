import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { Checkout } from './entity/checkout.entity';

@Module({
  controllers: [CheckoutController],
  imports: [TypeOrmModule.forFeature([Checkout])],
  providers: [CheckoutService]
})
export class CheckoutModule { }
