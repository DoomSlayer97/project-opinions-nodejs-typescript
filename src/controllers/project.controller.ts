import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Project } from "../entity/Project";
import { User } from "../entity/User"

export const findAllCustom = async (req: Request, res: Response): Promise<Response> => {

	return res.json({
		message: ""
	});

}

export const create = async (req: Request, res: Response) : Promise<Response> => {

	const {
		name,
		realeseDate,
		userId
	} : {
			name: string,
			realeseDate: Date,
			userId: number
	} = req.body;

	const newProject = new Project();

	newProject.name = name;
	newProject.realeseDate = realeseDate;

	const findedUser = await getRepository(User).findOne(userId);

	if (findedUser)
		newProject.user = findedUser;
		
	const createdProject = await getRepository(Project).save(newProject);

	return res.status(201).json({
		message: "create",
		project: createdProject
	});

}

export const findAll = async (req: Request, res: Response) : Promise<Response> => {

	const projects = await getRepository(Project).find();

	return res.json({
		projects
	});

}

export const findOne = async (req: Request, res: Response) : Promise<Response> => {
	
	const { id } = req.params;

	const project = await getRepository(Project).findOne(id);

	return res.json({
		project
	});

}

export const updateOne = async (req: Request, res: Response) : Promise<Response> => {

	const {
		name,
		realeseDate,
		userId
	} = req.body;

	const { id } = req.params;

	const findedProject = await getRepository(Project).findOne(id);

	if (!findedProject) return res.status(404).json({
		message: "not_finded"
	});

	findedProject.name = name;
	findedProject.realeseDate = realeseDate;

	const findedUser = await getRepository(User).findOne(userId);

	if (findedUser) findedProject.user = findedUser;

	const updatedProject = await getRepository(Project).save(findedProject);

	return res.status(201).json({
		message: "updated",
		project: updatedProject
	});

}

