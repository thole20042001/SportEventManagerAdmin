const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findAllTeams = async() => {
    return await models.DoiBong.findAll({
        raw: true
    });
}

exports.findAllTeamsAndCount = async() => {
    return await models.DoiBong.findAndCountAll({
        raw: true
    });
}
