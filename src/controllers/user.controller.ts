import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const auth = async (req: Request, res: Response): Promise<Response> => {
  
  const {
    username,
    password
  } = req.body;

  const userRepository = getRepository(User);

  const findedUser = await userRepository.findOne({ where: { username } });

  if (!findedUser) return res.status(404).json({
    message: "user_not_found"
  });

  const isMatch = bcrypt.compareSync(password, findedUser.password);
  
  if (!isMatch) return res.status(500).json({
    message: "invalid_password"
  });

  const token = jwt.sign({
    id: findedUser.id,
  }, "thisismysercretkey", {
    expiresIn: 24 * 24 * 7
  });

  findedUser.password = "";
  
  return res.status(201).json({
    message: "authenticated",
    user: findedUser,
    token
  });

}

export const create = async (req: Request, res: Response) : Promise<Response> => {
 
  const {
    firstname,
    lastname,
    username,
    password
  } = req.body;

  const newUser = new User();
  newUser.firstname = firstname;
  newUser.lastname = lastname;
  newUser.username = username;
  newUser.password = bcrypt.hashSync(password, 9);

  const createdUser = await getRepository(User).save(newUser);

  return res.status(201).json({
    message: "created",
    user: createdUser
  });

}

export const findAll = async (req: Request, res: Response) : Promise<Response> => {

  const users = await getRepository(User).find();

  return res.json({
    users
  });

}

export const findOne = async (req: Request, res: Response) : Promise<Response> => {

  const {
    id
  } = req.params;

  const user = await getRepository(User).findOne(id);

  return res.json({
    user
  });

}

export const updateOne = async (req: Request, res: Response): Promise<Response> => {
 
  const {
    firstname,
    lastname
  } = req.body;

  const { id } = req.params;

  const user = await getRepository(User).findOne(id);

  if(!user) return res.status(404).json({
    message: "not_founded"
  });

  user.firstname = firstname;
  user.lastname = lastname;

  const updatedUser = await getRepository(User).save(user);

  return res.status(201).json({
    message: "updated",
    user: updatedUser
  });

}

export const deleteOne = async (req: Request, res: Response): Promise<Response> => {
 
  const {
    id
  } = req.params;

  const deletedUser = await getRepository(User).delete(id);

  return res.status(201).json({
    message: "deleted",
    deletedUser
  });

}