import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'voting_users'
})
export class UserEntity {

    /**
     * Id of user
     */
    @PrimaryGeneratedColumn('uuid')
    id?: number;

    /**
     * Username
     */
    @Column()
    userName?: string;

    /**
     * Firstname
     */
    @Column()
    firstName?: string;

    /**
     * Email
     */
    @Column()
    email?: string;

    /**
     * Password
     */
    @Column()
    password?: string;

    /**
     * Active mode of Document Tag
     */
    @Column({
        type: 'boolean',
        default: false,
    })
    public active?: boolean;

    /**
     * Created column
     */
    @CreateDateColumn({
        // ...
    })
    public createdAt?: Date;

    /**
     * Updated column
     */
    @UpdateDateColumn({
        // ...
    })
    public updatedAt?: Date;

    /**
     * Deleted column
     */
    @DeleteDateColumn({
        //
    })
    public deletedAt?: Date;
}