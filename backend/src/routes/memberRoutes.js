import express from 'express';
import {
    createMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember,
} from '../controller/memberController.js';

const router = express.Router();

// Route for Save a new Member
router.post('/', createMember);

// Route for Get All Members from database
router.get('/', getMembers);

// Route for Get One Member from database by id
router.get('/:id', getMemberById);

// Route for Update a Member
router.put('/:id', updateMember);

// Route for Delete a Member
router.delete('/:id', deleteMember);

export default router;
