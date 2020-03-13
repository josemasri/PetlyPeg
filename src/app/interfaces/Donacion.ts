export interface Donacion {
  nombre: string;
  cantidad: number;
  email: string;
  periodo: 'unica' | 'mensual';
  direccion: string;
}
