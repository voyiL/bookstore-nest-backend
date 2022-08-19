import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book) private bookRep: Repository<Book>) { }
    createBook(createBookDto: CreateBookDto) {
        return this.bookRep.save(createBookDto);
    }
    updateBook(updateBookDto: UpdateBookDto, bookId: number) {
        return this.bookRep.update(bookId, updateBookDto);
    }
    deleteBook(bookId: number) {
        return this.bookRep.delete(bookId);
    }
    getAllBooks() {
        return this.bookRep.find({ relations: ['author'] });
    }
    getBook(bookId: number) {
        return this.bookRep.findOne({ where: { id: bookId }, relations: ['author'] })
    }
}
