export interface IOBJ{
    nome: string;
    codigo: number;
    foto: string;
    pagina?: string; //** ou ? indica que o campo não é obrigatório
    descricao: string;
    favorito: boolean;
}
