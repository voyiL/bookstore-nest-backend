import { Book } from "src/book/entity/book.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Checkout {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    bookId: number;
    @ManyToOne(() => Book, book => book.checkouts, { onDelete: 'CASCADE' })
    book: Book
}