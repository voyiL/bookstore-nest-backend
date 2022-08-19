import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import { Checkout } from './entity/checkout.entity';

@Injectable()
export class CheckoutService {
    constructor(@InjectRepository(Checkout) private checkoutRepo: Repository<Checkout>) { }
    checkoutBook(createCheckoutDto: CreateCheckoutDto) {
        return this.checkoutRepo.save(createCheckoutDto);
    }
    async getCheckoutByBookId(bookId: number) {
        return await this.checkoutRepo.findOne({ where: { bookId: bookId } });
    }
    returnBook(checkoutId: number) {
        return this.checkoutRepo.delete(checkoutId);
    }
    getAllCheckouts() {
        return this.checkoutRepo.find({ relations: ['book'] });
    }
}
