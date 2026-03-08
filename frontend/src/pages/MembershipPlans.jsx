import React from 'react';
import { Link } from 'react-router-dom';

const MembershipPlans = () => {
    return (
        <div className="w-full">
            <div className="p-6 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 text-primary">Choose Your Membership Plan</h1>
                <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
                    Whether you're looking to commit for a month or a full year, we have flexible plans designed to help you crush your fitness goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">

                    <div className="card bg-base-100 shadow-xl border-t-4 border-info hover:-translate-y-2 transition-transform duration-300">
                        <div className="card-body items-center text-center pb-8">
                            <h2 className="card-title text-2xl uppercase tracking-wider mb-2 text-info">Monthly</h2>
                            <p className="text-4xl font-bold mb-4">₹1,500<span className="text-base font-normal opacity-70"> /mo</span></p>

                            <ul className="text-left space-y-3 mb-8 w-full px-4">
                                <li>✓ Full gym access</li>
                                <li>✓ Access to cardio equipment</li>
                                <li>✓ Free locker usage</li>
                                <li className="opacity-50 line-through">Personal trainer</li>
                                <li className="opacity-50 line-through">Diet consultation</li>
                            </ul>

                            <div className="card-actions mt-auto">
                                <Link to="/members/create" state={{ plan: 'Monthly' }}><button className="btn btn-outline btn-info px-8">Select Plan</button></Link>
                            </div>
                        </div>
                    </div>

                    {/* Quarterly Plan */}
                    <div className="card bg-base-100 shadow-2xl border-2 border-primary transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300 relative">
                        <div className="absolute top-0 right-0 bg-primary text-primary-content px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm">
                            MOST POPULAR
                        </div>
                        <div className="card-body items-center text-center pb-8">
                            <h2 className="card-title text-3xl uppercase tracking-wider mb-2 text-primary">Quarterly</h2>
                            <p className="text-5xl font-bold mb-4">₹4,000<span className="text-base font-normal opacity-70"> /3 months</span></p>
                            <span className="badge badge-primary badge-outline mb-4">Save ₹500</span>

                            <ul className="text-left space-y-3 mb-8 w-full px-4">
                                <li>✓ Full gym access</li>
                                <li>✓ Access to cardio equipment</li>
                                <li>✓ Free locker usage</li>
                                <li>✓ 1 Free PT session</li>
                                <li>✓ Basic diet consultation</li>
                            </ul>

                            <div className="card-actions mt-auto">
                                <Link to="/members/create" state={{ plan: '6 months' }}><button className="btn btn-primary px-8 btn-lg">Select Plan</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
                        <div className="card-body items-center text-center pb-8">
                            <h2 className="card-title text-2xl uppercase tracking-wider mb-2 text-secondary">Yearly</h2>
                            <p className="text-4xl font-bold mb-4">₹12,000<span className="text-base font-normal opacity-70"> /yr</span></p>
                            <span className="badge badge-secondary badge-outline mb-4">Save ₹6,000!</span>

                            <ul className="text-left space-y-3 mb-8 w-full px-4">
                                <li>✓ Full gym access 24/7</li>
                                <li>✓ Access to all premium equipment</li>
                                <li>✓ Dedicated premium locker</li>
                                <li>✓ 5 Free PT sessions</li>
                                <li>✓ Advanced customized diet plan</li>
                                <li>✓ Free Gym T-shirt & Shaker</li>
                            </ul>

                            <div className="card-actions mt-auto">
                                <Link to="/members/create" state={{ plan: 'Yearly' }}><button className="btn btn-outline btn-secondary px-8">Select Plan</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MembershipPlans;
