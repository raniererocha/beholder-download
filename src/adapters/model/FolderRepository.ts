import fs from 'node:fs'
import {join} from 'node:path'

import {FolderRepositoryInterface} from '../../cases/FolderCase'
import { FolderInterface } from '../../entities/Folder'
import { FileInterface } from '../../entities/File'

export default class FolderRepository implements FolderRepositoryInterface {
    #folderContext: Context;
    
    constructor(context: Context) {
        this.#folderContext = context //context
    }

    public getByType(type: FileType){
        const [folder] = this.#folderContext.folders.filter(folder => folder.tag === type)
        return folder
    }
    public move(file: FileInterface, folder: FolderInterface){
       try {
        const oldPath = join(this.#folderContext.watchFolder, file.name)
        const newPath = join(folder.path, file.name)

        fs.rename(oldPath, newPath, () => console.log(`\nMovendo ${file.name}...\nde: ${oldPath}\npara: ${newPath}`))
       } catch (error) {
        console.log(error)
       }
    }

}