import { Member } from '../models/memberModel.js';

export const createMember = async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).send({ message: 'Name is required' });
        }
        const newMember = {
            name: req.body.name,
            trainerName: req.body.trainerName,
            mobileNo: req.body.mobileNo,
            workoutSplitType: req.body.workoutSplitType,
            goalType: req.body.goalType,
            initialWeight: req.body.initialWeight,
            currentWeight: req.body.currentWeight,
            goalAchieved: req.body.goalAchieved || false,
            membershipType: req.body.membershipType,
            workouts: req.body.workouts,
        };
        const member = await Member.create(newMember);
        return res.status(201).send(member);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        return res.status(200).json({
            count: members.length,
            data: members,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const getMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findById(id);
        return res.status(200).json(member);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const updateMember = async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).send({ message: 'Name is required' });
        }
        const { id } = req.params;
        const result = await Member.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Member not found' });
        }
        return res.status(200).send({ message: 'Member updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export const deleteMember = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Member.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Member not found' });
        }
        return res.status(200).send({ message: 'Member deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};
