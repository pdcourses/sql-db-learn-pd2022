/*
CRUD:  createUser, getUserById, updateUser, deleteUser

(Sequelize: create, findByPk, update, )
---
getAllUsers
getUserByLogin
*/

const { User } = require("./db/models");
const bcrypt = require('bcrypt');

const hashPasswordFun = async password => {
    try{
        return bcrypt.hash(password, 10);
    }catch(e){
        throw e;
    }
}

const createUser = async data => {
    try{
        data.passwordHash = await hashPasswordFun(data.password);
        const newUser = await User.create(data);
        return newUser;
    } catch(e){
        throw e;
    }
}

/*
const data = {
    firstName: 'Vasya',
    lastName: 'Test',
    email: "vasya@mail.com",
    login: 'vasya1',
    age: 20,
    password: 'admin'
};

createUser(data).then(console.log).catch(console.err);
*/

const getUserById = async id => {
    try{
        const foundUser = await User.findByPk(id);
        return foundUser;
    } catch(e){
        throw e;
    }
}

//getUserById(55).then(console.log).catch(console.err);
//getUserById(100).then(console.log).catch(console.err);
//getUserById(101).then(console.log).catch(console.err);

const getAllUsers = async data => {
    const {limit, offset} = data;
    try{
        const users = await User.findAll({
            limit, //limit: limit,
            offset, //offset: offset,
            attributes: {
                exclude: ['passwordHash', 'createdAt', 'updatedAt']
            }
        });
        return users;
    } catch(e){
        throw e;
    }
}

//getAllUsers({limit: 3, offset: 50}).then(console.log).catch(console.err);


const deleteUser = async id => {
    try{
        const foundUser = await User.destroy({
            where: {
                id: id
            }
        });
        return foundUser;
    } catch(e){
        throw e;
    }
}

deleteUser(1).then(console.log).catch(console.err);
getAllUsers({limit: 3, offset: 0}).then(console.log).catch(console.err);
