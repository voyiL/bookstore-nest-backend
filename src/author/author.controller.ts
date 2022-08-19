import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
    constructor(private authorService: AuthorService) { }
    @Post('/create')
    createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.createAuthor(createAuthorDto);
    }
    @Patch(':authorId')
    updateAuthor(@Body() updateAuthorDto: UpdateAuthorDto, @Param('authorId', ParseIntPipe) authorId: number) {
        return this.authorService.updateAuthor(updateAuthorDto, authorId);
    }
    @Delete(':authorId')
    deleteAuthor(@Param('authorId', ParseIntPipe) authorId: number) {
        return this.authorService.deleteAuthor(authorId);
    }
    @Get()
    getAllAuthors() {
        return this.authorService.getAllAuthors();
    }
    @Get(':authorId')
    getAuthor(@Param('authorId', ParseIntPipe) authorId: number) {
        return this.authorService.getAuthor(authorId);
    }
}
