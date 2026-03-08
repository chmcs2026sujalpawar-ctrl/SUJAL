import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete, MdSearch } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const MembersList = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [goalFilter, setGoalFilter] = useState('all');
    const [membershipFilter, setMembershipFilter] = useState('all');
    const [workoutFilter, setWorkoutFilter] = useState('all');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchQuery.trim()) return;

        let match = members.find(m => m.name.toLowerCase() === searchQuery.toLowerCase().trim());
        if (!match) {
            match = members.find(m => m.name.toLowerCase().includes(searchQuery.toLowerCase().trim()));
        }

        if (match) {
            navigate(`/members/details/${match._id}`);
        } else {
            alert(`No member found matching "${searchQuery}"`);
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('/api/members')
            .then((response) => {
                setMembers(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const filteredMembers = members.filter((member) => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesGoal = true;
        if (goalFilter === 'achieved') {
            matchesGoal = member.goalAchieved === true;
        } else if (goalFilter === 'not_achieved') {
            matchesGoal = member.goalAchieved === false;
        }

        let matchesMembership = true;
        if (membershipFilter !== 'all') {
            matchesMembership = member.membershipType === membershipFilter;
        }

        let matchesWorkout = true;
        if (workoutFilter !== 'all') {
            matchesWorkout = member.workoutSplitType?.toLowerCase() === workoutFilter.toLowerCase();
        }

        return matchesSearch && matchesGoal && matchesMembership && matchesWorkout;
    });

    return (
        <div className='w-full'>
            <div className='p-6 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center mb-6 gap-4'>
                    <h2 className='text-3xl font-bold'>Gym Members Directory</h2>

                    <div className='flex flex-wrap gap-4 w-full md:w-auto justify-end'>
                        <select
                            className="select select-bordered w-full md:w-48 bg-base-100"
                            value={goalFilter}
                            onChange={(e) => setGoalFilter(e.target.value)}
                        >
                            <option value="all">All Goals</option>
                            <option value="achieved">Goal Achieved</option>
                            <option value="not_achieved">Goal Not Achieved</option>
                        </select>

                        <select
                            className="select select-bordered w-full md:w-36 bg-base-100"
                            value={workoutFilter}
                            onChange={(e) => setWorkoutFilter(e.target.value)}
                        >
                            <option value="all">All Workouts</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="calesthenics">Calesthenics</option>
                        </select>

                        <select
                            className="select select-bordered w-full md:w-48 bg-base-100"
                            value={membershipFilter}
                            onChange={(e) => setMembershipFilter(e.target.value)}
                        >
                            <option value="all">All Memberships</option>
                            <option value="Monthly">Monthly</option>
                            <option value="6 months">6 Months</option>
                            <option value="Yearly">Yearly</option>
                        </select>

                        <div className="join w-full md:w-80 shadow-md">
                            <input
                                type="text"
                                placeholder="Search member by name..."
                                className="input input-bordered join-item w-full bg-base-100"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button className="btn btn-secondary join-item px-4" onClick={handleSearch}>
                                <MdSearch className='w-5 h-5' />
                            </button>
                        </div>

                        <Link to='/members/create' className='flex-shrink-0'>
                            <button className="btn btn-primary shadow-lg h-full">
                                <MdOutlineAddBox className='text-xl mr-2' /> <span className='hidden sm:inline'>Add Member</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {loading ? (
                    <Spinner />
                ) : (
                    <div className="overflow-x-auto bg-base-100 rounded-box shadow-xl border border-base-300">
                        <table className='table table-zebra w-full'>
                            <thead>
                                <tr className="bg-base-300 text-base-content text-lg">
                                    <th className="rounded-tl-box w-16 text-center">No</th>
                                    <th>Name</th>
                                    <th className='hidden md:table-cell'>Mobile No.</th>
                                    <th className='hidden md:table-cell'>Goal</th>
                                    <th className='hidden md:table-cell'>Workout</th>
                                    <th className='hidden lg:table-cell'>Membership</th>
                                    <th className="rounded-tr-box text-center w-40">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMembers.map((member, index) => (
                                    <tr key={member._id} className='hover border-b border-base-200'>
                                        <td className='text-center'>{index + 1}</td>
                                        <td className='font-semibold text-lg'>{member.name}</td>
                                        <td className='hidden md:table-cell'>{member.mobileNo || 'N/A'}</td>
                                        <td className='hidden md:table-cell'>
                                            <span className="badge badge-accent badge-outline">{member.goalType}</span>
                                        </td>
                                        <td className='hidden md:table-cell capitalize'>
                                            {member.workoutSplitType || 'N/A'}
                                        </td>
                                        <td className='hidden lg:table-cell'>{member.membershipType}</td>
                                        <td>
                                            <div className='flex justify-center gap-x-3'>
                                                <Link to={`/members/details/${member._id}`} className="tooltip tooltip-bottom" data-tip="Details">
                                                    <button className="btn btn-sm btn-info btn-square">
                                                        <BsInfoCircle className='text-lg' />
                                                    </button>
                                                </Link>
                                                <Link to={`/members/edit/${member._id}`} className="tooltip tooltip-bottom" data-tip="Edit">
                                                    <button className="btn btn-sm btn-warning btn-square">
                                                        <AiOutlineEdit className='text-lg' />
                                                    </button>
                                                </Link>
                                                <Link to={`/members/delete/${member._id}`} className="tooltip tooltip-bottom tooltip-error" data-tip="Delete">
                                                    <button className="btn btn-sm btn-error btn-square">
                                                        <MdOutlineDelete className='text-lg' />
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredMembers.length === 0 && (
                                    <tr>
                                        <td colSpan="7" className="text-center py-12 text-xl font-medium text-base-content/60">
                                            {searchQuery || goalFilter !== "all" || workoutFilter !== "all" || membershipFilter !== "all" ? "No members found matching filters." : "No members found. Add some!"}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MembersList;
