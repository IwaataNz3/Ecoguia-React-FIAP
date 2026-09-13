import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import almaImg from '../assets/img/alma.png';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section
          className="py-24 text-center px-6"
          style={{ background: 'linear-gradient(to bottom, #e6f4ea 0%, #f8fafc 100%)' }}
        >
          <span className="text-emerald-500 font-bold uppercase tracking-wider text-sm block mb-4">
            A Tecnologia por trás
          </span>
          <h2 className="text-5xl text-slate-800 font-extrabold mb-4">
            O Motor de Reputação <span className="text-emerald-500">SoulUp</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Transformando ações invisíveis em progresso tangível para o planeta através da inteligência de dados.
          </p>
        </section>

        {/* Anatomia do Motor */}
        <section className="py-12">
          <div className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-[1.2]">
              <h3 className="text-3xl mb-6 text-slate-800 font-extrabold">O que é o Motor?</h3>
              <div className="flex flex-col gap-6 mt-8">
                <p className="text-lg leading-relaxed text-slate-500 text-justify">
                  O <strong>Motor de Reputação Social</strong> é o núcleo de processamento do EcoGuia. Ele funciona através da análise de fluxos de dados externos que representam ações de impacto ambiental real. O sistema utiliza esses dados para alimentar um algoritmo de pontuação que define o estado atual da <strong>Aura Digital</strong> do usuário.
                </p>
                <p className="text-lg leading-relaxed text-slate-500 text-justify">
                  A lógica de funcionamento baseia-se na <strong>consistência e verificação</strong>. O motor recebe registros de atividades — como o descarte correto de resíduos ou a utilização de transporte de baixa emissão — e os converte em pontos de reputação. Esses pontos não são estáticos; eles exigem manutenção periódica, incentivando a continuidade das práticas sustentáveis para que a reputação não decline.
                </p>
                <p className="text-lg leading-relaxed text-slate-500 text-justify">
                  Visualmente, essa reputação é sintetizada na evolução da <strong>Alma Digital</strong>. Conforme o motor valida novos dados, o avatar passa por transformações de estado, indicando o nível de maturidade ecológica alcançado. É uma solução de engenharia voltada para transformar dados brutos de atividades em um indicador de confiança social e ambiental transparente.
                </p>
              </div>
            </div>

            <div className="flex-[0.8] flex justify-center w-full">
              <img
                src={almaImg}
                alt="SoulUp Tech Avatar"
                className="w-full max-w-md animate-flutuar-lento"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(16, 185, 129, 0.15))' }}
              />
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-slate-50 flex justify-center">
          <div className="max-w-3xl text-center mx-auto px-6">
            <h3 className="text-3xl text-slate-800 mb-6 font-extrabold">Valor e Utilidade da Reputação</h3>
            <p className="text-lg leading-relaxed text-slate-500 mb-6">
              O acúmulo de reputação social através do motor oferece ao usuário uma métrica objetiva de sua contribuição ambiental. Esse indicador funciona como um currículo de sustentabilidade verificado, permitindo que o indivíduo comprove seu engajamento com práticas ecológicas de forma incontestável.
            </p>
            <p className="text-lg leading-relaxed text-slate-500 mb-6">
              Além da validação pessoal, a evolução da Alma Digital desbloqueia o acesso a um ecossistema de benefícios e marcos de conquista. Ao transformar ações isoladas em um histórico contínuo e mensurável, o sistema atribui valor prático ao esforço individual, facilitando a participação em programas de incentivo e fortalecendo a rede de confiança entre os usuários do projeto.
            </p>
          </div>
        </section>

        {/* Explicação Técnica */}
        <section className="mb-16">
          <div className="w-11/12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl text-slate-800 font-bold">Contexto e Resolução do Problema</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <h4 className="text-emerald-500 mb-4 text-xl font-bold">O Problema Estrutural</h4>
                <p className="text-slate-500 leading-relaxed text-base">
                  Atualmente, a mensuração de impacto ambiental é altamente focada no setor corporativo. Indivíduos que adotam práticas sustentáveis geram dados fragmentados e isolados. Não existe um protocolo padronizado que permita ao usuário comum centralizar, auditar e comprovar seu histórico de ações ecológicas ao longo do tempo. A ausência dessa rastreabilidade inviabiliza a criação de sistemas de incentivo baseados em confiança.
                </p>
              </Card>
              <Card>
                <h4 className="text-emerald-500 mb-4 text-xl font-bold">A Solução Proposta</h4>
                <p className="text-slate-500 leading-relaxed text-base">
                  O EcoGuia atua como um hub centralizador de dados verificados. A lógica da ideia é a mesma, porém seus pontos obtidos com suas ações sustentáveis terão mais funcionalidades. O Motor de Reputação processa entradas das suas ações, aplica regras de validação e converte as ações em um indicativo numérico auditável.
                </p>
              </Card>
              <Card>
                <h4 className="text-emerald-500 mb-4 text-xl font-bold">A Mecânica do Motor</h4>
                <p className="text-slate-500 leading-relaxed text-base">
                  A arquitetura do algoritmo exige constância. A pontuação não é um acúmulo infinito; ela sofre decaimento temporal caso o usuário interrompa o fluxo de atividades validadas. Isso garante que a "Aura Digital" seja um reflexo fiel do comportamento atual do indivíduo. O motor avalia a consistência comportamental baseando-se puramente no fluxo contínuo de dados.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer texto="© 2026 SoulUp - Todos os direitos reservados." />
    </div>
  );
};

export default Sobre;
