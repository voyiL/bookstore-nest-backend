import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }
    @Post('/create')
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.bookService.createBook(createBookDto);
    }
    @Patch(':bookId')
    updateBook(@Body() updateBookDto: UpdateBookDto, @Param('bookId', ParseIntPipe) bookId: number) {
        return this.bookService.updateBook(updateBookDto, bookId)
    }
    @Delete(':bookId')
    deleteBook(@Param('bookId', ParseIntPipe) bookId: number) {
        return this.bookService.deleteBook(bookId);
    }
    @Get()
    getAllBooks() {
        return this.bookService.getAllBooks();
    }
    @Post(':bookId')
    getBook(@Param('bookId', ParseIntPipe) bookId: number) {
        return this.bookService.getBook(bookId);
    }
}
