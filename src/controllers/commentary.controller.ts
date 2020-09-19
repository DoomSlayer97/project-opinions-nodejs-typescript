import { Request, Response } from "express";
import { Socket } from "socket.io";
import { getRepository } from "typeorm";
import { Commentary } from "../entity/Commentary"
import { Project } from "../entity/Project";

export const findByProject = async (req: Request, res: Response): Promise<Response> => {

  const { projectId } = req.params;

  const comentaries = await getRepository(Commentary).find({
    where: {
      projectId
    }
  });

  return res.json({
    comentaries
  });

}

export const create = async (req: Request, res: Response): Promise<Response> => {
  
  const {
    text,
    projectId,
    parentId
  } = req.body;

  const newComentary = new Commentary();
  
  newComentary.text = text;

  if (parentId) {
    
    const parentComentary = await getRepository(Commentary).findOne(parentId);
    
    if (!parentComentary) return res.status(404).json({
      message: "parent_comentary_not_found"
    });

    newComentary.parent = parentComentary;

  }

  if (projectId) {

    const project = await getRepository(Project).findOne(projectId);

    if (!project) return res.status(404).json({
      message: "project_not_found"
    });

    newComentary.project = project;

  }

  const createdComentary = await getRepository(Commentary).save(newComentary);

  

  return res.status(201).json({
    message: "created_comentary",
    comentary: createdComentary
  });

}

export const findAll = async (req: Request, res: Response): Promise<Response> => {

  const comentaries = await getRepository(Commentary)
    .find({
      where: {
        parentId: null
      }
    });

  return res.json({
    comentaries
  });

}

