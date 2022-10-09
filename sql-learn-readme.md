**Sequelize** - ORM библиотека для Node.js для работы с базами реляционными
- позволяет не писать sql-запросы а работать с данными как с обьектами js

**ORM** - Object Relation Mapping - объектно-реляционная база (отношение)

----
## npm sequelize init

(config, migrations, models, seeders)
-----

### создать базу по выстроенным настройкам

npx sequelize db:create

-----
# Создание и работа с таблицами

## Работа с миграциями

**создание** 
npx sequelize-cli model:generate --name User --attributes name:string,surname:string,email:string

**запуск**
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate --name name-migration

отмена
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo --name name-migration
npx sequelize-cli db:migrate:undo:all --to name-migration

## Работа с моделями

npx sequelize-cli model:create User --attributes name:string,surname:string,email:string

User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Uknown',
      validate: {
        is: /^[A-Z][a-z]{1,20}$/
      },
      field: 'first_name'
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    age: DataTypes.NUMBER,
    passwordHash: DataTypes.TEXT
  }

  modelName: 'User',
  tableName: 'Users',
  underscored: true, // авто преобразование имен для базы данных в snake case

  Users:
  first_name, last_name, email, login, age, password_hash

  ------

  **seeders**
генерация:
npx sequelize seed:generate --name test-users

запуск:

npx sequelize db:seed:all
npx sequelize db:seed --seed name-seed

отмена:

npx sequelize db:seed:all:undo
npx sequelize db:seed:undo --seed name-seed

