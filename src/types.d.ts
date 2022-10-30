type FileType = "document" | "music" | "video" | "image" | "other" | "instalador"

interface Context {
    folders: Array<FolderInterface>
    watchFolder: string
}