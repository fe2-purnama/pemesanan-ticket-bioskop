// services/admin.service.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to retrieve users');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await prisma.users.findUnique({
      where: { user_id: parseInt(userId) }
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to retrieve user');
  }
};

const updateUserRole = async (userId, role) => {
  try {
    const updatedUser = await prisma.users.update({
      where: { user_id: parseInt(userId) },
      data: { role }
    });
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to update user role');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserRole
};
