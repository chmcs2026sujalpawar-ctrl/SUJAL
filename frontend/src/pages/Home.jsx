import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const Home = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <div className="hero min-h-[60vh]" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <div className="hero-overlay bg-opacity-70 bg-neutral"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-primary">Gym Management</h1>
                        <p className="mb-5 text-lg">
                            Welcome to the ultimate fitness destination. We offer state-of-the-art equipment, personalized workout splits, and elite trainers to help you reach your peak potential. Train harder, stay consistent, and achieve the body you've always wanted.
                        </p>
                        <Link to="/members" className="btn btn-primary px-8">View Members</Link>
                    </div>
                </div>
            </div>

            <div className='p-6 max-w-7xl mx-auto'>
                {/* Benefits Section */}
                <div className='my-12 text-center'>
                    <h2 className='text-3xl font-bold mb-8 uppercase tracking-wider'>Benefits of Our Workouts</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className="card bg-base-200 shadow-xl border-t-4 border-primary">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl mb-2">Build Strength</h2>
                                <p>Progressive overload and structured workout splits guarantee noticeable strength and muscle gains.</p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-xl border-t-4 border-info">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl mb-2">Weight Management</h2>
                                <p>Whether you're aiming for weight loss or muscle gain, our customized routines ensure you hit your goals optimally.</p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-xl border-t-4 border-success">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl mb-2">Enhance Health</h2>
                                <p>Experience improved cardiovascular health, better posture, and higher daily energy levels.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider my-12"></div>

                {/* Contact Section */}
                <div className='my-16 text-center'>
                    <h2 className='text-3xl font-bold mb-8 uppercase tracking-wider'>Visit Us</h2>
                    <div className="card bg-base-100 shadow-xl max-w-5xl mx-auto border border-base-200">
                        <div className="card-body">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-left">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Gym Management Headquarters</h3>

                                    <div>
                                        <h4 className="font-semibold text-lg text-base-content/80 uppercase mb-2">Address</h4>
                                        <p className="text-lg">123 Fitness Avenue, Iron District</p>
                                        <p className="text-lg">Muscle City, Strongland 40001</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg text-base-content/80 uppercase mb-2">Contact Details</h4>
                                        <p className="text-lg flex items-center gap-2">📞 +91 98765 43210</p>
                                        <p className="text-lg flex items-center gap-2">✉️ info@gymmanagement.com</p>
                                    </div>
                                </div>

                                <div className="flex-1 w-full bg-base-200 rounded-xl p-6 shadow-inner">
                                    <h4 className="font-semibold text-lg text-primary uppercase mb-4">Operating Hours</h4>
                                    <ul className="space-y-4 text-lg">
                                        <li className="flex justify-between border-b border-base-300 pb-2">
                                            <span>Monday - Friday</span>
                                            <span className="font-bold">5:00 AM - 11:00 PM</span>
                                        </li>
                                        <li className="flex justify-between border-b border-base-300 pb-2">
                                            <span>Saturday</span>
                                            <span className="font-bold">6:00 AM - 10:00 PM</span>
                                        </li>
                                        <li className="flex justify-between pb-2">
                                            <span>Sunday</span>
                                            <span className="font-bold text-error">7:00 AM - 1:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
