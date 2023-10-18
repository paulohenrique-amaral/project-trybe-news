export type NewsItems = {
  id: string;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: string;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type ContextNewsData = {
  news: NewsItems[];
  isLoading: boolean;
  fetchApi: (url: string) => void;
};

export type UserProviderProps = {
  children: React.ReactNode;
};
