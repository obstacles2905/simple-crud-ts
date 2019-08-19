import { CreateDateColumn, Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("crud")
export class CrudEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column("text")
  data: string;

  @Column("text")
  description: string;
}
