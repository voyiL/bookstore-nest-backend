import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {
    constructor(@InjectRepository(Author) private authorRepo: Repository<Author>) { }
    createAuthor(createAuthorDto: CreateAuthorDto) {
        return this.authorRepo.save(createAuthorDto);
    }
    updateAuthor(updateAuthorDto: UpdateAuthorDto, authorId: number) {
        return this.authorRepo.update(authorId, updateAuthorDto);
    }
    deleteAuthor(authorId: number) {
        return this.authorRepo.delete(authorId);
    }
    getAllAuthors() {
        return this.authorRepo.find();
    }
    getAuthor(authorId: number) {
        return this.authorRepo.findOne({ where: { id: authorId }, relations: ['books'] });
    }
}
