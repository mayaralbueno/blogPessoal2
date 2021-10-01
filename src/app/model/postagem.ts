import { tema } from "./tema"
import { usuario } from "./usuario"

export class postagem {
  public id: number
  public titulo: string
  public texto: string
  public data: Date
  public usuario: usuario
  public minhasPostagens: postagem
  public tema: tema

}