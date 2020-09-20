import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany
} from "typeorm";
import { Commentary } from "./Commentary";
import { Project } from "./Project";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @OneToMany( type => Project, project => project.user )
  projects: Project[];

  @OneToMany( type => Commentary, comentary => comentary.user )
  comentaries: Commentary[];

}

