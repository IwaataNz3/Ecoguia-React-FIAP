import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';

// Página de dúvidas frequentes
const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <section className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Dúvidas <span className="text-emerald-500">Frequentes</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Esclareça os principais pontos sobre o funcionamento técnico do Motor de Reputação.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FaqItem 
              pergunta="Como o Motor valida os dados de atividade?" 
              resposta="O motor utiliza os próprios registros brutos de atividades sustentáveis. Esses dados passam por uma camada de validação que verifica a autenticidade da ação antes de convertê-la em pontos de reputação para a Aura Digital." 
            />
            <FaqItem 
              pergunta="A reputação é vitalícia ou pode expirar?" 
              resposta="A reputação social no SoulUp é dinâmica. O algoritmo de manutenção exige que o usuário mantenha uma frequência mínima de atividades. Longos períodos de inatividade resultam em uma redução gradual do brilho da Aura, incentivando a consistência ambiental." 
            />
            <FaqItem 
              pergunta="Qual a função técnica da Alma Digital?" 
              resposta="Tecnicamente, a Alma Digital é um componente visual que traduz variáveis complexas do banco de dados (como volume de carbono evitado ou recorrência de descarte) em um estado visual compreensível, facilitando a percepção de progresso do usuário." 
            />
            <FaqItem 
              pergunta='Os "Marcos de Aura" influenciam no sistema?' 
              resposta="Sim. Ao atingir determinados patamares de pontuação processados pelo motor, o usuário desbloqueia novos estados para seu avatar e registra conquistas permanentes em seu histórico de reputação social verificado." 
            />
          </div>
        </section>
      </main>

      <Footer texto="© 2026 SoulUp - Projeto de Engenharia Front-End" />
    </div>
  );
};

export default FAQ;
