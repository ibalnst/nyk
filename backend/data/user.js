import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nayaka Danish',
    email: 'nayakadanish@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sertraline',
    email: 'sertraline@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
