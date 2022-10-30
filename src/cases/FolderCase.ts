import File, { FileInterface } from "../entities/File";
import Folder, { FolderInterface } from "../entities/Folder";

export interface FolderRepositoryInterface {
    readonly getByType: (type: FileType) => FolderInterface
    readonly move: (file: FileInterface, folder: FolderInterface) => void
}


export default class FolderCase {
    repository: FolderRepositoryInterface

    constructor(repository : FolderRepositoryInterface) {
        this.repository = repository
    }

    public moveFile(file: File) {
        const folder = this.repository.getByType(file.type)
        this.repository.move(file, folder)
    }

}