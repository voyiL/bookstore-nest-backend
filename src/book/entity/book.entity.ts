import { Author } from "src/author/entity/author.entity";
import { Checkout } from "src/checkout/entity/checkout.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    isAvailable: boolean;
    @Column()
    authorId: number;
    @ManyToOne(() => Author, author => author.books, { onDelete: 'CASCADE' })
    author: Author
    @OneToMany(() => Checkout, checkout => checkout.book)
    checkouts: Checkout[]
}