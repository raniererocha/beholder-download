export interface FolderInterface {
    id: string
    name: string;
    path: string;
    size: number;
    tag: FileType;
}

export default class Folder implements FolderInterface {
    readonly #id: string;
    name: string;
    path: string;
    size: number;
    tag: FileType;

    constructor (data: FolderInterface) {
        this.#id = data.id
        this.name = data.name
        this.path = data.path
        this.size = data.size
        this.tag = data.tag
    }

    get id() {
        return this.#id
    }

}