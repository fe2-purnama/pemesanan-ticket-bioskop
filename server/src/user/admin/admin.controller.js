// controllers/admin.controller.js

const adminService = require('../services/admin.service');

const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await adminService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const { id, role } = req.body;
    const updatedUser = await adminService.updateUserRole(id, role);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserRole
};
