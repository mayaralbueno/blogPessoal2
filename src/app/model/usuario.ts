import { StringMap } from "@angular/compiler/src/compiler_facade_interface"
import { postagem } from "./postagem"

export class usuario{
  public id: number
  public nome: string
  public email: string
  public senha: string
  public foto: string
  public tipo: string
  public minhasPostagens: postagem[]
}