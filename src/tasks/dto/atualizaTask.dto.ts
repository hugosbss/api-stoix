export class atualizaTaskDto {
    id: number;
    titulo: string;
    descricao: string;
    status: string;

    constructor(id: number, titulo: string, descricao: string, status: string) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
}