const User = require('../model/user');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const returnUser = async (req, res) => {
    try{
        const users = await User.findAll();
        return res.json(users)
    } catch{
        console.log(`Erro ao buscar usuários: ${error}`);
        return null
    }
}

const authenticatedUser = async (req, res) => {
    const { email, password} = req.body;
    try{
        const isUserAuthenticaded = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        return res.json(isUserAuthenticaded);
    } catch (error) {
        return res.json("Usuário não encontrado!");
    }
}
   
module.exports = { createUser, returnUser, authenticatedUser };