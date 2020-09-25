import { Request, Response } from "express"
import { filesUtils } from "../utils/filesUtils"

export const test1 = async (req: Request, res: Response): Promise<Response> => {

  const dataFile = await filesUtils.getFileConvertedToJson("./text.json");

  if (dataFile instanceof Array)
    console.log("Is a array!");

  return res.json({
    message: "ok",
    dataFile
  });

}

export const test2 = async (req: Request, res: Response) => {

  const {
    name,
    username,
    age
  } = req.body;

  const urlFile = "./text.json";

  const dataFile = await filesUtils.getFileConvertedToJson(urlFile);
 
  let newData = dataFile.users;

  if (newData instanceof Array) {

    newData.push({
      name,
      username,
      age
    });

  }

  const saveData = await filesUtils.writeFile(urlFile, JSON.stringify(newData));

  if (!saveData) return res.status(500).json({
    message: "cant_save_cnanges"
  });

  return res.json({
    message: "data_has_been_changed",
    newData
  });

}

