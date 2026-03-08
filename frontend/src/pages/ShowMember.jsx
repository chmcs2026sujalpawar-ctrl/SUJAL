import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowMember = () => {
    const [member, setMember] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/api/members/${id}`)
            .then((response) => {
                setMember(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='p-4 max-w-3xl mx-auto'>
            <h1 className='text-3xl font-bold my-4'>Member Details</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='card bg-base-100 shadow-xl border border-base-300'>
                    <div className='card-body'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Name</span>
                                <span className="text-xl font-semibold">{member.name}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Mobile No.</span>
                                <span className="text-lg">{member.mobileNo}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Trainer Name</span>
                                <span className="text-lg">{member.trainerName || 'None'}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Workout Split Type</span>
                                <span className="text-lg capitalize">{member.workoutSplitType}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Goal Type</span>
                                <span className="text-lg">{member.goalType}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Initial Weight</span>
                                <span className="text-lg">{member.initialWeight} kg</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Current Weight</span>
                                <span className="text-lg">{member.currentWeight} kg</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Membership Type</span>
                                <span className="text-lg">{member.membershipType}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Goal Achieved</span>
                                <span className="text-lg">
                                    {member.goalAchieved ? (
                                        <span className="badge badge-success text-white">Yes</span>
                                    ) : (
                                        <span className="badge badge-warning">No</span>
                                    )}
                                </span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2 md:col-span-2'>
                                <span className='font-bold text-gray-500 text-sm'>Assigned Workouts</span>
                                <span className="text-base whitespace-pre-wrap">{member.workouts}</span>
                            </div>
                            <div className='flex flex-col border-b border-base-200 pb-2'>
                                <span className='font-bold text-gray-500 text-sm'>Member Since</span>
                                <span className="text-sm">{new Date(member.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>

                        <div className="card-actions justify-end mt-8 border-t border-base-200 pt-4">
                            <button className="btn btn-neutral px-8" onClick={() => navigate('/')}>Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowMember;
