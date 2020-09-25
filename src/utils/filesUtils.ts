import fs from "fs"

export class filesUtils {

  static writeFile( fileUrl: string, newData: any ): Promise<any> {

    return new Promise((resolve, reject) => {

      fs.writeFile(fileUrl, newData, (err) => {

        if (err) return reject(false);

        return resolve(true);

      });

    });

  }

  static getFileConvertedToJson( fileUrl: string ): Promise<any> {

    return new Promise((resolve, reject) => {
      
      fs.readFile(fileUrl, (err, data) => {

        if (err) return reject(false);
        
        return resolve(JSON.parse(data.toString()));

      });

    });

  }

}



