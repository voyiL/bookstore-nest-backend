import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './entity/book.entity';

@Module({
  controllers: [BookController],
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService]
})
export class BookModule {}
