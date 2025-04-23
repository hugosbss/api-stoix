import { IsString, IsNotEmpty } from 'class-validator';

export class CriarTaskDto {
    @IsString()
    @IsNotEmpty({ message: 'O título não pode ser vazio' })
    titulo: string;

    @IsString()
    @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
    descricao: string;

    @IsString()
    @IsNotEmpty({ message: 'O status não pode ser vazio' })
    status: string;
}