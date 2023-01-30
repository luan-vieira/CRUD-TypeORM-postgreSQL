import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: String;

  @Column()
  updatedAt: String;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
