const express = require('express')
const { getOrgMember, createOrgComment, deleteOrgComment, getOrgComments } = require('../controllers');

const route = express.Router()

route.get('/:orgs/members', getOrgMember);
route.post('/:orgs/comments', createOrgComment);
route.delete('/:orgs/comments', deleteOrgComment);
route.get('/:orgs/comments', getOrgComments);

module.exports = route;
