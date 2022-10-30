import chokidar from 'chokidar'
import FolderRepository from '../adapters/model/FolderRepository'
import FileCase from '../cases/FileCase'
import FolderCase from '../cases/FolderCase'
import { FileInterface } from '../entities/File'

export default class Application {
    private readonly context: Context
    private FileCase: FileCase
    private FolderCase: FolderCase
    constructor(context: Context) {
        this.context = context
        const folderRepository = new FolderRepository(context)
        this.FileCase = new FileCase()
        this.FolderCase = new FolderCase(folderRepository)
    }

    public watch() {
        const watcher = chokidar.watch(this.context.watchFolder)
        this.showWelcomeMessage()
        watcher.on('add', (path, stat) => {
            this.showWelcomeMessage()
            const relativeFilePath = this.getRelativeFilePath(path)
            if (this.FileCase.isDowloading(path)) {
                console.log('Aguardando o termino do download...')
                return
            }
            
            if(this.checkIsFile(relativeFilePath)) {
                const name = this.FileCase.getFileNameByPath(relativeFilePath)
                const tag = this.FileCase.checkFileType(name)
                const file : FileInterface = {name, size: stat?.size! ,type: tag  }
                this.FolderCase.moveFile(file)
                
            }       
        })
    }
    private showWelcomeMessage() {
        console.log(`Observando a pasta ${this.context.watchFolder}...`)
    }
    private getRelativeFilePath(path: string) {
        return path.split(this.context.watchFolder)[1]
    }
    private checkIsFile(path: string) : boolean {
        if (path.split('/').length > 2) {
            return false
        } 
        return true
    }
} 