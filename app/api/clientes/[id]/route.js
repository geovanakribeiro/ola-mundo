import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { nome, email } = body;

    // Validação
    if (!nome || nome.trim() === '') {
      return NextResponse.json({ error: 'O campo Nome é obrigatório.' }, { status: 400 });
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'O formato do Email é inválido.' }, { status: 400 });
    }

    const [result] = await pool.query(
      'UPDATE clientes SET nome = ?, email = ? WHERE id = ?',
      [nome.trim(), email ? email.trim() : null, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: 'Cliente não encontrado para edição.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Cliente atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    return NextResponse.json({ error: 'Erro interno ao tentar atualizar.' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: 'Cliente não encontrado para exclusão.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Cliente removido com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    return NextResponse.json({ error: 'Erro interno ao excluir cliente.' }, { status: 500 });
  }
}
