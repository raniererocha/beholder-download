import { homedir } from "node:os";
import { join } from "node:path";

export const settings : Context = {
    folders:  [
        {
            id: '1',
            name: 'Documentos',
            path: join(homedir(), 'Documentos', 'Documentos'),
            size: 150,
            tag: 'document'
        },
        {
            id: '2',
            name: 'Imagens',
            path: join(homedir(), 'Imagens'),
            size: 150,
            tag: 'image'
        },
        {
            id: '2',
            name: 'Música',
            path: join(homedir(), 'Música'),
            size: 150,
            tag: 'music'
        },
        {
            id: '2',
            name: 'Outros',
            path: join(homedir(), 'Outros'),
            size: 150,
            tag: 'other'
        },
        {
            id: '2',
            name: 'Vídeos',
            path: join(homedir(), 'Vídeos'),
            size: 150,
            tag: 'video'
        },
        {
            id: '2',
            name: 'Instaladores',
            path: join(homedir(), 'Documentos','Instaladores'),
            size: 150,
            tag: 'instalador'
        }
    ],
    watchFolder: join(homedir(), 'Downloads')
}