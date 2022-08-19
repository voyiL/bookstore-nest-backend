import { Book } from "src/book/entity/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstname: string
    @Column()
    lastname: string
    @OneToMany(() => Book, book => book.author)
    books: Book[]
}