export interface ResNoticias {
  ok: boolean;
  noticias: Noticia[];
}

export interface Noticia {
  id: number;
  img: string;
  titulo: string;
  autor: string;
  fecha: Date;
  contenido: string;
}
