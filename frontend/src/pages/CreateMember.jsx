import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from '../lib/axios';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateMember = () => {
    const [name, setName] = useState('');
    const [trainerName, setTrainerName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [workoutSplitType, setWorkoutSplitType] = useState('beginner');
    const [goalType, setGoalType] = useState('Wt. gain');
    const [initialWeight, setInitialWeight] = useState('');
    const [currentWeight, setCurrentWeight] = useState('');
    const [goalAchieved, setGoalAchieved] = useState(false);
    const location = useLocation();
    const [membershipType, setMembershipType] = useState(location.state?.plan || 'Monthly');
    const [workouts, setWorkouts] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveMember = () => {
        const data = {
            name,
            trainerName,
            mobileNo,
            workoutSplitType,
            goalType,
            initialWeight: initialWeight ? Number(initialWeight) : 0,
            currentWeight: currentWeight ? Number(currentWeight) : 0,
            goalAchieved,
            membershipType,
            workouts
        };
        setLoading(true);
        axios
            .post('/api/members', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                const errMsg = error.response?.data?.message || 'An error happened. Please Check console';
                alert(errMsg);
                console.log(error);
            });
    };

    return (
        <div className='p-4 max-w-2xl mx-auto'>
            <h1 className='text-3xl font-bold my-4'>Add Gym Member</h1>
            {loading ? <Spinner /> : ''}
            <div className='card bg-base-100 shadow-xl border border-base-300'>
                <div className='card-body'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Name */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Name</span></label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='input input-bordered w-full' placeholder="Full Name" />
                        </div>

                        {/* Trainer Name */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Trainer Name</span></label>
                            <input type='text' value={trainerName} onChange={(e) => setTrainerName(e.target.value)} className='input input-bordered w-full' placeholder="Trainer Name (Optional)" />
                        </div>

                        {/* Mobile No */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Mobile No.</span></label>
                            <input type='text' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className='input input-bordered w-full' placeholder="Phone Number" />
                        </div>

                        {/* Workout Split Type */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Workout Split Type</span></label>
                            <select value={workoutSplitType} onChange={(e) => setWorkoutSplitType(e.target.value)} className="select select-bordered w-full">
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="calesthenics">Calesthenics</option>
                            </select>
                        </div>

                        {/* Goal Type */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Goal Type</span></label>
                            <select value={goalType} onChange={(e) => setGoalType(e.target.value)} className="select select-bordered w-full">
                                <option value="Wt. Loss">Weight Loss</option>
                                <option value="Wt. gain">Weight Gain</option>
                            </select>
                        </div>

                        {/* Initial Weight */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Initial Weight (kg)</span></label>
                            <input type='number' value={initialWeight} onChange={(e) => setInitialWeight(e.target.value)} className='input input-bordered w-full' placeholder="e.g. 70" />
                        </div>

                        {/* Current Weight */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Current Weight (kg)</span></label>
                            <input type='number' value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} className='input input-bordered w-full' placeholder="e.g. 70" />
                        </div>

                        {/* Membership Type */}
                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text font-semibold'>Membership Type</span></label>
                            <select value={membershipType} onChange={(e) => setMembershipType(e.target.value)} className="select select-bordered w-full">
                                <option value="Monthly">Monthly</option>
                                <option value="6 months">6 Months</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        {/* Goal Achieved */}
                        <div className='form-control w-full flex-row items-center gap-4 mt-8'>
                            <label className='cursor-pointer label p-0'>
                                <span className='label-text font-semibold mr-4'>Goal Achieved?</span>
                                <input type="checkbox" checked={goalAchieved} onChange={(e) => setGoalAchieved(e.target.checked)} className="checkbox checkbox-primary" />
                            </label>
                        </div>

                        {/* Workouts */}
                        <div className='form-control w-full md:col-span-2'>
                            <label className='label'><span className='label-text font-semibold'>Workouts Routine</span></label>
                            <textarea value={workouts} onChange={(e) => setWorkouts(e.target.value)} className='textarea textarea-bordered h-24 w-full' placeholder="List assigned workouts..."></textarea>
                        </div>

                    </div>

                    <div className="card-actions justify-end mt-8 border-t border-base-200 pt-6">
                        <button className='btn btn-ghost' onClick={() => navigate('/')}>Cancel</button>
                        <button className='btn btn-primary px-8' onClick={handleSaveMember}>
                            Save Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateMember;
