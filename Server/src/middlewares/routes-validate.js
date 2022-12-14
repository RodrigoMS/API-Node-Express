// ----------- Configuração da validação de dados ------------
// Configuração das respostas de erro do Express Validation,
// conforme o código de erro.

import { UnauthorizedError } from "express-jwt";
import { ValidationError } from "express-validation";

export default (error, req, res, next) => {

  // Retorna o erro quando a solicitação ao servidor não é valida.
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error)
  }

  // Retorna o erro quando o token de autenticação não é valido.
  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error)
  }

  // Qualquer outro erro retorna o status 500
  // ( O servidor encontrou uma condição inesperada 
  //   que o impediu de atender a solicitação )
  return res.status(500).json(error)
}