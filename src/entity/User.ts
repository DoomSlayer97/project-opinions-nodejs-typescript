import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany
} from "typeorm";
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

}

