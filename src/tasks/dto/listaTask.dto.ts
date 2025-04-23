export class ListaTaskDto {

    id: number;
    titulo: string;
    descricao: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, titulo: string, descricao: string, status: string) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}