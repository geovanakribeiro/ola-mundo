import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM clientes ORDER BY id DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return NextResponse.json({ error: 'Erro interno ao tentar listar clientes.' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email } = body;

    // Validação básica do lado do backend
    if (!nome || nome.trim() === '') {
      return NextResponse.json({ error: 'O campo Nome é obrigatório.' }, { status: 400 });
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'O formato do Email é inválido.' }, { status: 400 });
    }

    const [result] = await pool.query(
      'INSERT INTO clientes (nome, email) VALUES (?, ?)',
      [nome.trim(), email ? email.trim() : null]
    );

    return NextResponse.json(
      { id: result.insertId, nome, email, message: 'Cliente inserido com sucesso!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    return NextResponse.json({ error: 'Erro interno ao tentar salvar o cliente.' }, { status: 500 });
  }
}
