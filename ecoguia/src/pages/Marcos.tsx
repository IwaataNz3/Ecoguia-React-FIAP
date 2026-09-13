import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import almaImg from '../assets/img/alma.png';
import type { MarcoData } from '../types';

interface MarcoDataExtended extends MarcoData {
  id: string;
  meta?: string;
}

interface MarcoCardProps {
  marco: MarcoDataExtended;
}

const MarcoCard: React.FC<MarcoCardProps> = ({ marco }) => {
  const navigate = useNavigate();
  const isUnlocked = marco.status === 'desbloqueado';

  return (
    <Card className={`transition-all duration-300 ${
      isUnlocked
        ? 'border-l-4 border-l-emerald-500 border-slate-200 shadow-md'
        : 'border-slate-200 shadow-sm'
    } ${marco.status === 'bloqueado' ? 'opacity-75' : ''}`}>
      <div className="flex gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border ${
          isUnlocked ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'
        }`}>
          {marco.icone}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-slate-800 mb-0.5">{marco.titulo}</h3>
          <p className="text-sm text-slate-500 mb-3 leading-snug">{marco.descricao}</p>

          {marco.status === 'desbloqueado' && (
            <span className="inline-block bg-green-100 text-emerald-500 text-xs font-bold px-3 py-1 rounded-full uppercase">
              ✓ Validado
            </span>
          )}

          {marco.status === 'em-analise' && (
            <span className="inline-block bg-yellow-100 text-amber-500 text-xs font-bold px-3 py-1 rounded-full">
              ⏳ {marco.statusLabel}
            </span>
          )}

          {marco.status === 'bloqueado' && (
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1 font-medium">
                <span className="text-emerald-500 font-semibold">Em progresso ({marco.progressoLabel})</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${marco.progresso}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Botão para Rota Dinâmica */}
        <div className="flex-shrink-0 flex items-center">
          <Button variant="outline" onClick={() => navigate(`/marcos/${marco.id}`)}>
            Ver Detalhes
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Hook do timer sazonal
const useContador = (horasIniciais: number, minutosIniciais: number) => {
  const totalSegundos = horasIniciais * 3600 + minutosIniciais * 60;
  const [segundosRestantes, setSegundosRestantes] = useState(totalSegundos);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosRestantes((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const horas = Math.floor(segundosRestantes / 3600);
  const minutos = Math.floor((segundosRestantes % 3600) / 60);
  const segundos = segundosRestantes % 60;

  return {
    display: `${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(segundos).padStart(2, '0')}s`,
    encerrado: segundosRestantes === 0,
  };
};

const Marcos: React.FC = () => {
  const contador = useContador(47, 12);

  const marcos: MarcoDataExtended[] = [
    {
      id: 'pioneiro',
      icone: '🏆',
      titulo: 'Pioneiro Ecológico',
      descricao: 'Primeira ação de impacto positivo verificada e integrada com sucesso ao sistema.',
      status: 'desbloqueado',
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
    },
    {
      id: 'consistencia',
      icone: '✨',
      titulo: 'Consistência Pura',
      descricao: 'Manter o nível de Aura máxima por 30 dias consecutivos sem quedas de atividade.',
      status: 'em-analise',
      statusLabel: 'Em análise (12/30 dias)',
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
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <section className="max-w-[700px] mx-auto px-6">

          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center mb-8">
            <img src={almaImg} alt="Alma Digital" className="mb-4 animate-flutuar drop-shadow-lg" style={{ width: '140px', height: 'auto' }} />
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
              Marcos de <span className="text-emerald-500">Reputação</span>
            </h2>
            <p className="text-slate-500 text-base max-w-md">
              Acompanhe a evolução da sua Aura Digital através de conquistas validadas pelo motor.
            </p>
          </div>

          {/* Banner de Evento Sazonal */}
          {!contador.encerrado && (
            <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div className="flex-1">
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-1.5">
                    Evento Sazonal
                  </span>
                  <h3 className="font-bold text-slate-800 text-base mb-1">Semana do Reflorestamento</h3>
                  <p className="text-sm text-slate-500 leading-snug">
                    Complete o plantio de uma muda antes do tempo acabar para desbloquear o{' '}
                    <span className="font-bold text-amber-700">Selo Lendário: Guardião da Floresta</span>.{' '}
                    Nunca mais estará disponível.
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-amber-700 font-bold text-sm">
                    <span>⏱</span>
                    <span>Termina em {contador.display}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lista de Marcos */}
          <div className="flex flex-col gap-4 mb-16">
            {marcos.map((marco) => (
              <MarcoCard key={marco.id} marco={marco} />
            ))}
          </div>

          {/* Explicação Técnica */}
          <div className="pt-10 border-t border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-800 text-center mb-6">
              Sobre os Marcos de Reputação
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h4 className="text-emerald-500 font-bold text-base mb-3">O Problema</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A falta de progressão clara e de registro histórico dificulta a manutenção de práticas sustentáveis. Sem um sistema de validação de constância e metas, a evasão e o abandono de hábitos ecológicos por parte dos usuários são altos.
                </p>
              </Card>
              <Card>
                <h4 className="text-emerald-500 font-bold text-base mb-3">A Solução</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  O sistema de Marcos implementa trilhas de progressão baseadas em regras de negócio do motor (ex: exigência de 30 dias de constância). Ele automatiza a emissão de selos de validação, exigindo recorrência para manter o status, o que garante a retenção e o engajamento contínuo através de dados verificados.
                </p>
              </Card>
            </div>
          </div>

        </section>
      </main>

      <Footer texto="© 2026 SoulUp - Monitoramento de Impacto Social" />
    </div>
  );
};

export default Marcos;