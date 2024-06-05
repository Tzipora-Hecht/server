import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Professional {
    @PrimaryGeneratedColumn()
    id

    @Column()
    name

    // @Column()
    // lastName

    // @Column()
    // age
}

