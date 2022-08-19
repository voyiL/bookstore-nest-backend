import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './book/entity/book.entity';
import { Author } from './author/entity/author.entity';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CheckoutModule } from './checkout/checkout.module';
import { Checkout } from './checkout/entity/checkout.entity';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    CheckoutModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'PC4',
      password: 'Password@1',
      database: 'bookstoredb',
      entities: [Book, Author, Checkout],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
