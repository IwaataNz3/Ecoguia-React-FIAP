// Interface de dados do usuário
export interface UserData {
  nome: string;
  nivel: number;
  pontos: number;
  pontosMax: number;
  co2Evitado: string;
  residuosDesviados: string;
  diasOfensiva: number;
}

// Interface para os integrantes do grupo
export interface Membro {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
}

// Interface para as dúvidas frequentes
export interface FaqItemData {
  pergunta: string;
  resposta: string;
}

// Interface para os marcos ecológicos
export interface MarcoData {
  icone: string;
  titulo: string;
  descricao: string;
  status: 'desbloqueado' | 'bloqueado' | 'em-analise';
  progresso?: number;
  progressoLabel?: string;
  statusLabel?: string;
  meta?: string;
}

// Interface para o formulário de contato
export interface ContatoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}
