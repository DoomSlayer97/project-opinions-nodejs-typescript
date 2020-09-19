import {
  Entity,
  Column,
  PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany
} from "typeorm";
import { Project } from "./Project";

@Entity()
export class Commentary {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  text: string;

  @Column({
    nullable: true
  })
  parentId: number;
  
  @Column()
  projectId: number;

  //RELATIONS
  @ManyToOne(type => Commentary, commentary => commentary.children, {
    nullable: true
  })
  parent: Commentary;

  @OneToMany( type => Commentary, Commentary => Commentary.parent, {
    nullable: true
  })
  children: Commentary[];

  @ManyToOne( type => Project, project => project.comentaries )
  project: Project;

}


