function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // exemplo OU
  const comprarTv50 = trabalho1 && trabalho2 // exemplo E
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2 // exemplo XOR
  const manterSaudavel = !comprarSorvete // operador unário, negação lógica

  // está retornando um objeto "chave: valor", o nome do valor é igual ao da constante, assim foi omitida aqui
  // assim o nome da constante é a chave do objeto
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
