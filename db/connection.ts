import { Sequelize } from 'sequelize'

const db = new Sequelize('ts-node', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
  // logging: false
})

export default db
