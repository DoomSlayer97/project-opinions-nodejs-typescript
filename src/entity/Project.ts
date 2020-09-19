import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany
} from "typeorm";
import { Commentary } from "./Commentary";
import { User } from "./User";

@Entity()
export class Project {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	realeseDate: Date;

	@Column()
	userId: number;

	@ManyToOne( type => User, user => user.projects )
	user: User;

	@OneToMany( type => Commentary, comentary => comentary.project )
	comentaries: Commentary[];

}

