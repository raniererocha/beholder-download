import File, { FileInterface } from "../entities/File";

export interface FileRepositoryInterface {
    readonly registerFile: (data: FileInterface) => void 
}


const filterType :Partial< Record<FileType, Array<string>>> = {
    document: ['pdf', 'md', 'doc', 'docx'],
    image: ['png', 'jpg', 'jpeg', 'gif'],
    instalador: ['exe', 'deb'],
    music: ['mp3', 'wav'],
    video: ['mp4', 'mov', 'mpeg', 'mkv']
}
export default class FileCase {
    
    public getFileNameByPath(path: string) {
      return path.split('/')[1]    
    }
    public checkFileType(name: string) : FileType {
        const documents = filterType.document?.filter(extension => name.endsWith(extension))
        const image = filterType.image!.filter(extension => name.endsWith(extension))
        const video = filterType.video!.filter(extension => name.endsWith(extension))
        const music = filterType.music!.filter(extension => name.endsWith(extension))
        const instalador = filterType.instalador!.filter(extension => name.endsWith(extension))
        if(documents!.length) { 
            return 'document'
        }
        if(image.length) {
            return 'image'
        }
        if(instalador.length) {
            return 'instalador'
        }
        if(music.length) {
            return 'music'
        }
        if(video.length) {
            return 'video'
        }
        return 'other'         
    }
    public isDowloading(path: string) {
        if (path.endsWith('.crdownload')) {
            return true
        }
        return false
    }
  
}