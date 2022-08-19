import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller('checkout')
export class CheckoutController {
    constructor(private checkoutService: CheckoutService) { }

    @Get('/all')
    getAllCheckouts() {
        return this.checkoutService.getAllCheckouts();
    }
    @Get(':bookId')
    getCheckoutByBookId(@Param('bookId', ParseIntPipe) bookId: number) {
        return this.checkoutService.getCheckoutByBookId(bookId);
    }
    @Post('/create')
    checkoutBook(@Body() createCheckoutDto: CreateCheckoutDto) {
        return this.checkoutService.checkoutBook(createCheckoutDto);
    }
    @Delete(':checkoutId')
    returnBook(@Param('checkoutId', ParseIntPipe) checkoutId: number) {
        return this.checkoutService.returnBook(checkoutId);
    }
}
