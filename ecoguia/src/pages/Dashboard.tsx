import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import almaImg from '../assets/img/alma.png';
import { useUser } from '../context/UserContext';

// Dados das ações sustentáveis
const acoes = [
  { id: 1, icone: '🚲', label: 'Fui de bicicleta ou a pé', co2: 2.1, residuos: 0, pontos: 120 },
  { id: 2, icone: '♻️', label: 'Descartei resíduo corretamente', co2: 0, residuos: 1.5, pontos: 90 },
  { id: 3, icone: '🌱', label: 'Evitei carne no almoço', co2: 1.3, residuos: 0, pontos: 70 },
  { id: 4, icone: '💡', label: 'Reduzi consumo de energia', co2: 0.8, residuos: 0, pontos: 50 },
];

interface RegistroActionForm {
  acaoId: string;
}

const Dashboard: React.FC = () => {
  const { usuario } = useUser();

  // Estados do usuário
  const [pontos, setPontos] = useState(usuario.pontos);
  const [co2, setCo2] = useState(parseFloat(usuario.co2Evitado));
  const [residuos, setResiduos] = useState(parseFloat(usuario.residuosDesviados));
  const [streak] = useState(usuario.diasOfensiva);
  const nivel = usuario.nivel;
  const pontosMax = usuario.pontosMax;

  // Formulário de registro
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<RegistroActionForm>();
  const [painelAberto, setPainelAberto] = useState(false);
  const [feedback, setFeedback] = useState<{ pontos: number; mensagem: string } | null>(null);

  const watchAcaoId = watch("acaoId");

  const onSubmit = (data: RegistroActionForm) => {
    const acao = acoes.find((a) => a.id === parseInt(data.acaoId));
    if (!acao) return;

    const novosPontos = Math.min(pontos + acao.pontos, pontosMax);
    setPontos(novosPontos);
    setCo2((prev) => parseFloat((prev + acao.co2).toFixed(1)));
    setResiduos((prev) => parseFloat((prev + acao.residuos).toFixed(1)));

    setFeedback({ pontos: acao.pontos, mensagem: acao.label });
    setPainelAberto(false);
    reset();
  };

  // Temporizador do alerta de feedback
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const progressoPct = Math.round((pontos / pontosMax) * 100);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <section className="container mx-auto px-6 flex flex-col items-center">

          {/* Feedback de ação registrada */}
          {feedback && (
            <div className="w-full max-w-[950px] mb-6 bg-green-50 border border-green-200 border-l-4 border-l-emerald-500 rounded-2xl px-6 py-4 flex items-center gap-4 animate-slide-in-left">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold text-slate-800">Motor registrou sua ação!</p>
                <p className="text-slate-500 text-sm">"{feedback.mensagem}" —&nbsp;
                  <span className="text-emerald-500 font-bold">+{feedback.pontos} pts</span> adicionados à sua Aura.
                </p>
              </div>
            </div>
          )}

          {/* Profile Card */}
          <div className="bg-white w-full max-w-[950px] rounded-3xl shadow-md border border-slate-200 p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center text-6xl shadow-inner relative z-10 border-4 border-white">
                👤
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-emerald-500/20 animate-pulsar-aura blur-xl z-0 scale-150"></div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white z-20">
                {nivel}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left z-10 w-full">
              <h2 className="text-3xl font-bold text-slate-800 mb-1">{usuario.nome}</h2>
              <p className="text-slate-500 text-sm mb-3">Este perfil está a {streak} dias salvando o planeta.</p>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm mb-4">
                🔥 {streak} dias
              </div>

              {/* Barra de XP */}
              <div className="w-full">
                <div className="flex justify-between text-sm font-medium text-slate-500 mb-1.5">
                  <span>Progresso da Aura</span>
                  <span className="text-emerald-500 font-bold">{pontos} / {pontosMax} pts</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${progressoPct}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">Nível {nivel} → {progressoPct}% concluído</p>
              </div>
            </div>

            {/* Alma / Avatar */}
            <div className="md:border-l-2 md:border-dashed md:border-slate-200 md:pl-12 flex flex-col items-center z-10">
              <img src={almaImg} alt="Alma Digital" className="w-28 mb-3 animate-flutuar" />
              <span className="text-sm font-bold text-emerald-500 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Avatar Nível {nivel}
              </span>
            </div>
          </div>

          <div className="w-full max-w-[950px] mb-8">
            <Button
              fullWidth
              onClick={() => { setPainelAberto(!painelAberto); reset(); }}
              className="py-4 rounded-md font-semibold text-base"
            >
              {painelAberto ? 'Cancelar' : 'Registrar Ação Ecológica'}
            </Button>

            {/* Painel de seleção de ação (usando React Hook Form) */}
            {painelAberto && (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-slate-200 rounded-2xl p-6 mt-3 shadow-sm">
                <p className="text-slate-800 font-bold mb-1">O que você fez hoje?</p>
                <p className="text-slate-500 text-sm mb-4">Selecione a ação e o Motor calculará seu impacto automaticamente.</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {acoes.map((acao) => (
                    <label
                      key={acao.id}
                      className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        watchAcaoId === String(acao.id)
                          ? 'border-emerald-500 bg-green-50 shadow-sm'
                          : 'border-slate-200 hover:border-emerald-500/50'
                      }`}
                    >
                      <input 
                        type="radio" 
                        value={acao.id} 
                        {...register("acaoId", { required: "Selecione uma ação válida" })}
                        className="hidden" 
                      />
                      <span className="text-2xl">{acao.icone}</span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{acao.label}</p>
                        <p className="text-emerald-500 text-xs font-bold">+{acao.pontos} pts</p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.acaoId && <p className="text-red-500 text-sm mb-3 font-bold">{errors.acaoId.message}</p>}

                <Button
                  type="submit"
                  fullWidth
                  disabled={!watchAcaoId}
                  className="disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  Confirmar e Enviar ao Motor
                </Button>
              </form>
            )}
          </div>

          {/* Metrics Row usando Componente Reutilizável Card */}
          <div className="w-full max-w-[950px] grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-6">
              <p className="text-3xl font-bold text-emerald-500 mb-2">{co2} kg</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">CO2 Evitado</p>
            </Card>

            <Card className="text-center p-6">
              <p className="text-3xl font-bold text-emerald-500 mb-2">{residuos} kg</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Resíduos Desviados</p>
            </Card>

            <Card className="text-center p-6">
              <p className="text-3xl font-bold text-emerald-500 mb-2">Nível {nivel}</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Status do Avatar</p>
            </Card>
          </div>

          {/* Technical Info */}
          <div className="w-full max-w-[950px] mb-8 mt-4">
            <h3 className="text-xl font-extrabold text-slate-800 text-center">Sobre o Dashboard</h3>
          </div>
          <div className="w-full max-w-[950px] grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-50">
              <h4 className="text-lg font-bold text-slate-800 mb-3">O Problema</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ações sustentáveis individuais geram dados fragmentados e invisíveis. O usuário comum não possui um mecanismo centralizado e confiável para quantificar, auditar e exibir seu impacto ambiental (como volume de CO2 evitado e resíduos desviados) de forma tangível.
              </p>
            </Card>
            <Card className="bg-slate-50">
              <h4 className="text-lg font-bold text-slate-800 mb-3">A Solução</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                O Dashboard atua como um painel de monitoramento de dados em tempo real. Ele consolida os registros validados pelo Motor de Reputação e os traduz em métricas exatas e em um estado visual (Aura Digital). Isso fornece um registro auditável e contínuo do engajamento do usuário.
              </p>
            </Card>
          </div>

        </section>
      </main>

      <Footer texto="© 2026 SoulUp - Dashboard de Impacto Verificado" />
    </div>
  );
};

export default Dashboard;