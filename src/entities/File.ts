export interface FileInterface {
    name: string;
    size: number;
    type: FileType;
}

export default class File implements FileInterface {

    readonly size: number;
    name: string;
    type: FileType

    constructor(data: FileInterface) {     
        this.name = data.name
        this.size = data.size
        this.type = data.type
    }
 
}