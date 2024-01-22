import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({
    type: "varchar",
    length: 128,
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
    default: null,
  })
  image: string;

  @Column({
    type: "varchar",
    length: 255,
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
  })
  name: string;

  @Column({
    type: "text",
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
    default: null,
  })
  description: string;

  @Column({
    type: "float",
    default: null,
  })
  price: number;

  @Column({
    type: "varchar",
    length: 16,
    charset: "utf8mb4",
    collation: "utf8mb4_general_ci",
    default: null,
  })
  color: string;
}
