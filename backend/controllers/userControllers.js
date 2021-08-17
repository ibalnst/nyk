import asyncHandler from 'express-async-handler';
import User from '../models/userModal.js';
import generatedToken from '../utils/generateToken.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid Email or Password' });
    throw new Error('Invalid Email or Password');
  }
});

// @desc GET user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: 'User not found' });
    throw new Error('User not found');
  }
});

// @desc GET all users profile
// @route GET /api/users/
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.json(user);
});

// @desc Update User Profile
// @route PUT /api/users/profile
// @access Public

const updatedUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generatedToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: 'User not found' });
    throw new Error('User not found');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await User.findOne({ email });

  if (existUser) {
    res.status(400).json({ message: 'User Already exists' });
    throw new Error('User Already Exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'User not found' });
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile, registerUser, updatedUserProfile, getUsers };
