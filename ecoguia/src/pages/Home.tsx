import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import almaImg from '../assets/img/alma.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="w-full flex items-center justify-center py-8"
          style={{
            minHeight: 'calc(100vh - 80px)',
            background: 'radial-gradient(circle at center top, #e6f4ea 0%, #f8fafc 70%)',
          }}
        >
          <div className="w-11/12 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4">
            {/* Texto e CTA */}
            <div className="flex-1 text-center md:text-left animate-slide-in-left">
              <h2 className="text-slate-800 text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
                Motor Automatizado de{' '}
                <br className="hidden md:block" />
                <span className="text-emerald-500">Reputação Social</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
                Potencializando a sustentabilidade através da análise de dados e evolução da alma digital.
              </p>
              <Link to="/dashboard" className="no-underline">
                <Button variant="primary">
                  Explorar Dashboard
                </Button>
              </Link>
            </div>

            {/* Alma flutuante */}
            <div className="flex-1 flex justify-center animate-fade-in">
              <img
                src={almaImg}
                alt="Imagem representando a EcoGuia"
                className="max-w-xs md:max-w-md w-full animate-flutuar"
                style={{ filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.2))' }}
              />
            </div>
          </div>
        </section>

        {/* Seção de Solução */}
        <section className="py-24 bg-white">
          <div className="w-11/12 max-w-6xl mx-auto">
            {/* Header da seção */}
            <div className="text-center mb-16">
              <h3 className="text-4xl text-slate-800 font-extrabold mb-4">
                Como funciona o <span className="text-emerald-500">Motor</span>?
              </h3>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                O EcoGuia automatiza o reconhecimento do seu impacto ambiental sem que você precise gastar tempo com postagens manuais.
              </p>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card hoverable className="text-center bg-slate-50 border-transparent py-12">
                <span className="text-5xl mb-6 block">📊</span>
                <h4 className="text-slate-800 text-2xl font-bold mb-4">Integração de Dados</h4>
                <p className="text-slate-500 leading-relaxed text-base m-0">
                  O sistema vai validar suas ações sustentáveis automaticamente, desde compras conscientes até descarte correto.
                </p>
              </Card>

              {/* Card 2 */}
              <Card hoverable className="text-center bg-slate-50 border-transparent py-12">
                <span className="text-5xl mb-6 block">⚙️</span>
                <h4 className="text-slate-800 text-2xl font-bold mb-4">Processamento Inteligente</h4>
                <p className="text-slate-500 leading-relaxed text-base m-0">
                  Nosso motor analisa a consistência das suas ações e calcula o crescimento da sua reputação social em tempo real.
                </p>
              </Card>

              {/* Card 3 */}
              <Card hoverable className="text-center bg-slate-50 border-transparent py-12">
                <span className="text-5xl mb-6 block">✨</span>
                <h4 className="text-slate-800 text-2xl font-bold mb-4">Evolução da Aura</h4>
                <p className="text-slate-500 leading-relaxed text-base m-0">
                  Sua alminha digital reflete seu compromisso. Ganhe novos marcos, desbloqueie benefícios e visualize sua jornada verde.
                </p>
              </Card>
            </div>

            {/* Botão secundário */}
            <div className="flex justify-center mt-16">
              <Link to="/sobre" className="no-underline">
                <Button variant="secondary">
                  Saber mais sobre a tecnologia
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer texto="© 2026 EcoGuia. Projeto de Engenharia Front-End - FIAP." />
    </div>
  );
};

export default Home;
