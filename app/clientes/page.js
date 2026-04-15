'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function ClientesCRUD() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Status feedback (success/error form messages)
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  
  // Form State
  const [idEditando, setIdEditando] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  const [saving, setSaving] = useState(false);

  // Fetch initial data on mount
  useEffect(() => {
    buscarClientes();
  }, []);

  async function buscarClientes() {
    setLoading(true);
    try {
      const res = await fetch('/api/clientes');
      if (!res.ok) throw new Error('Falha ao buscar clientes do banco de dados');
      const data = await res.json();
      setClientes(data);
    } catch (error) {
      mostrarFeedback('Erro de Conexão: Não foi possível carregar a lista de clientes. Verifique se o MySQL está rodando.', 'error');
    } finally {
      setLoading(false);
    }
  }

  function mostrarFeedback(message, type) {
    setFeedback({ message, type });
    // Autoclear after 5 seconds
    setTimeout(() => {
      setFeedback({ message: '', type: '' });
    }, 5000);
  }

  function prepararEdicao(cliente) {
    setIdEditando(cliente.id);
    setNome(cliente.nome);
    setEmail(cliente.email || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function cancelarEdicao() {
    setIdEditando(null);
    setNome('');
    setEmail('');
  }

  async function salvarCliente(e) {
    e.preventDefault();
    
    // Front-end pure validation
    if (!nome.trim()) {
      mostrarFeedback('O campo Nome é obrigatório!', 'error');
      return;
    }
    
    // Email regex validate se não for vazio
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) {
      mostrarFeedback('O formato de email digitado é inválido.', 'error');
      return;
    }

    setSaving(true);

    const isEdit = idEditando !== null;
    const url = isEdit ? `/api/clientes/${idEditando}` : '/api/clientes';
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao salvar cliente retornado pelo servidor');
      }

      mostrarFeedback(data.message, 'success');
      cancelarEdicao(); // Limpa form e estado
      buscarClientes(); // Puxa atualizações fresquinhas do MySQL

    } catch (error) {
      mostrarFeedback(error.message, 'error');
    } finally {
      setSaving(false);
    }
  }

  async function deletarCliente(id, nomeCliente) {
    const confirmar = window.confirm(`ATENÇÃO: Tem certeza que deseja deletar o cliente '${nomeCliente}' do sistema?`);
    
    if (!confirmar) return;

    try {
      const res = await fetch(`/api/clientes/${id}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erro ao deletar o registro.');

      mostrarFeedback(data.message, 'success');
      buscarClientes(); // Atualiza painel

    } catch (error) {
       mostrarFeedback(error.message, 'error');
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        
        <h1 className={styles.pageTitle}>
          <i className="bi bi-people-fill"></i> Central de Clientes
        </h1>

        {feedback.message && (
           <div className={`${styles.feedback} ${feedback.type === 'error' ? styles.feedbackError : styles.feedbackSuccess}`}>
              <i className={`bi ${feedback.type === 'error' ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill'} me-2`}></i>
              {feedback.message}
           </div>
        )}

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            {idEditando ? 'Editando Cliente Existente' : 'Cadastrar Novo Cliente'}
          </h2>
          
          <form onSubmit={salvarCliente}>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome Completo *</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={styles.input}
                    placeholder="Luiza Rodrigues"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email (Opcional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder="luiza@exemplo.com"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                type="submit" 
                className={styles.btnPrimary} 
                disabled={saving}
              >
                {saving ? (
                  <><span className="spinner-border spinner-border-sm"></span> Salvando dados...</>
                ) : (
                  <><i className="bi bi-floppy"></i> {idEditando ? 'Atualizar Cliente' : 'Salvar Cliente'}</>
                )}
              </button>
              
              {idEditando && (
                <button 
                  type="button" 
                  onClick={cancelarEdicao} 
                  className={styles.btnSecondary}
                  disabled={saving}
                >
                  <i className="bi bi-x-circle me-1"></i> Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Registros</h2>
          
          {loading ? (
             <div className={styles.loadingContainer}>
               <div className={styles.loadingSpinner}></div>
               <p>Estabelecendo conexão via MySQL e carregando os dados...</p>
             </div>
          ) : clientes.length === 0 ? (
             <div className={styles.emptyState}>
               <i className="bi bi-folder-x fs-1 mb-3 d-block"></i>
               Nenhum cliente cadastrado no momento. Insira utilizando o formulário e eles aparecerão aqui.
             </div>
          ) : (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Data de Cadastro</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map(cliente => (
                    <tr key={cliente.id}>
                      <td className="fw-bold" style={{color: '#ad1457'}}>#{cliente.id}</td>
                      <td className="fw-semibold">{cliente.nome}</td>
                      <td>{cliente.email ? cliente.email : <span className="text-black-50 fst-italic">Sem email</span>}</td>
                      <td>{new Date(cliente.criado_em).toLocaleDateString('pt-BR')}</td>
                      <td className={styles.actionCell}>
                        <button 
                          className={styles.btnEdit} 
                          onClick={() => prepararEdicao(cliente)}
                          title="Atualizar"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button 
                          className={styles.btnDanger}
                          onClick={() => deletarCliente(cliente.id, cliente.nome)}
                          title="Deletar permanentemente"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
