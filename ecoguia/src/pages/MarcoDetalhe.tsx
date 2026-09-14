import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import type { MarcoData } from '../types';

// Dados estáticos dos marcos
const todosMarcos: (MarcoData & { id: string, meta?: string, requisitos: string[] })[] = [
  {
    id: 'pioneiro',
    icone: '🏆',
    titulo: 'Pioneiro Ecológico',
    descricao: 'Primeira ação de impacto positivo verificada e integrada com sucesso ao sistema.',
    status: 'desbloqueado',
    requisitos: ['Realizar o primeiro login', 'Registrar a primeira ação no Dashboard']
  },
  {
    id: 'ciclo-fechado',
    icone: '🔋',
    titulo: 'Ciclo Fechado',
    descricao: 'Descarte de 10 itens eletrônicos via pontos de coleta parceiros e certificados.',
    status: 'bloqueado',
    progresso: 70,
    progressoLabel: '7/10 itens',
    meta: 'Descartar 10 itens eletrônicos em pontos parceiros',
    requisitos: ['Ir até um ponto de coleta certificado', 'Registrar o descarte de 10 itens']
  },
  {
    id: 'consistencia',
    icone: '✨',
    titulo: 'Consistência Pura',
    descricao: 'Manter o nível de Aura máxima por 30 dias consecutivos sem quedas de atividade.',
    status: 'em-analise',
    statusLabel: 'Em análise (12/30 dias)',
    requisitos: ['Manter ações diárias', 'Não deixar a ofensiva zerar por 30 dias']
  },
  {
    id: 'influenciador',
    icone: '🌿',
    titulo: 'Influenciador Verde',
    descricao: 'Contribuir para a validação de dados em 5 comunidades diferentes.',
    status: 'bloqueado',
    progresso: 20,
    progressoLabel: '1/5 redes',
    meta: 'Validar dados em 5 comunidades diferentes',
    requisitos: ['Participar ativamente de fóruns', 'Validar ações de outros usuários']
  },
];

const MarcoDetalhe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [marco, setMarco] = useState<typeof todosMarcos[0] | null>(null);
  const [loading, setLoading] = useState(true);

  // Carrega os dados do marco selecionado
  useEffect(() => {
    // Delay para mostrar o loading
    const timer = setTimeout(() => {
      const encontrado = todosMarcos.find(m => m.id === id);
      setMarco(encontrado || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex justify-center items-center">
          <div className="animate-spin text-4xl">♻️</div>
        </main>
        <Footer texto="© 2026 SoulUp - Monitoramento de Impacto Social" />
      </div>
    );
  }

  if (!marco) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-32 pb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Marco não encontrado</h2>
          <Button onClick={() => navigate('/marcos')}>Voltar para Marcos</Button>
        </main>
        <Footer texto="© 2026 SoulUp - Monitoramento de Impacto Social" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <section className="max-w-3xl mx-auto px-6">
          <Button variant="outline" onClick={() => navigate('/marcos')} className="mb-8">
            ← Voltar
          </Button>

          <Card className="text-center md:text-left md:flex gap-8 items-center border-t-4 border-t-emerald-500">
            <div className={`w-32 h-32 mx-auto md:mx-0 rounded-full flex items-center justify-center text-6xl flex-shrink-0 border-4 ${
              marco.status === 'desbloqueado' ? 'bg-green-50 border-green-200 shadow-lg shadow-green-100' : 'bg-gray-50 border-gray-200'
            } ${marco.status === 'bloqueado' ? 'opacity-75' : ''}`}>
              {marco.icone}
            </div>

            <div className="flex-1 mt-6 md:mt-0">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-2">{marco.titulo}</h2>
              <p className="text-slate-500 text-lg mb-4">{marco.descricao}</p>
              
              {marco.status === 'desbloqueado' && (
                <span className="inline-block bg-green-100 text-emerald-500 font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  ✓ Conquista Validada pelo Motor
                </span>
              )}
              {marco.status === 'em-analise' && (
                <span className="inline-block bg-yellow-100 text-amber-500 font-bold px-4 py-1.5 rounded-full">
                  ⏳ {marco.statusLabel}
                </span>
              )}
            </div>
          </Card>

          {/* Painel de Requisitos e Status */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Requisitos da Meta</h3>
              <ul className="space-y-3">
                {marco.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-500">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Status no Motor</h3>
              {marco.status === 'bloqueado' ? (
                <div>
                  <div className="flex justify-between text-sm text-slate-500 mb-1 font-medium">
                    <span className="text-emerald-500 font-semibold">Em progresso ({marco.progressoLabel})</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-emerald-500 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${marco.progresso}%` }}
                    />
                  </div>
                  <p className="text-sm mt-3 text-slate-500">
                    <strong>Objetivo:</strong> {marco.meta}
                  </p>
                </div>
              ) : marco.status === 'em-analise' ? (
                <p className="text-slate-500 text-sm leading-relaxed">
                  O Motor de Reputação está analisando a constância dos seus dados. Esta conquista depende de manutenção contínua das atividades para ser validada permanentemente.
                </p>
              ) : (
                <p className="text-slate-500 text-sm leading-relaxed">
                  Esta conquista já foi validada e seu impacto já foi permanentemente integrado à sua Aura Digital.
                </p>
              )}
            </Card>
          </div>

        </section>
      </main>

      <Footer texto="© 2026 SoulUp - Monitoramento de Impacto Social" />
    </div>
  );
};

export default MarcoDetalhe;