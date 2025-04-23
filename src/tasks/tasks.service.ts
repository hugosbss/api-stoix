import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'mysql2/promise';
import { CriarTaskDto } from './dto/criarTask.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject('DATABASE_CONNECTION') private db: Pool,
  ) {}

  async criarTask(dto: CriarTaskDto) {
    const [result] = await this.db.execute(
      'INSERT INTO tasks (titulo, descricao, status) VALUES (?, ?, ?)',
      [dto.titulo, dto.descricao, dto.status]
    );
    return result;
  }

  async listarTasks() {
    const [rows] = await this.db.execute('SELECT * FROM tasks');
    return rows;
  }

  async atualizarTask(id: number, dto: CriarTaskDto) {
    const [result] = await this.db.execute(
      'UPDATE tasks SET titulo = ?, descricao = ?, status = ? WHERE id = ?',
      [dto.titulo, dto.descricao, dto.status, id]
    );
    return result;
  }

  async deletarTask(id: number) {
    const [result] = await this.db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return result;
  }
}