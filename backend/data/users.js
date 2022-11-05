import bcrypt from 'bcrypt'

const users = [
  {
    name: 'Admin User',
    email: 'admin@lojadoleo.com.br',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Raquel Peixoto',
    email: 'raquel@lojadoleo.com.br',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Marlon Brando',
    email: 'marlon@lojadoleo.com.br',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
