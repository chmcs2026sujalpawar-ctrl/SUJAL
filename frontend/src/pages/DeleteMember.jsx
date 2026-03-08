import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from '../lib/axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMember = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteMember = () => {
        setLoading(true);
        axios
            .delete(`/api/members/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please Check console');
                console.log(error);
            });
    };

    return (
        <div className='p-4 max-w-xl mx-auto'>
            <h1 className='text-3xl font-bold my-4 text-error'>Delete Member</h1>
            {loading ? <Spinner /> : ''}
            <div className='card bg-base-100 shadow-xl border border-error max-w-md mx-auto'>
                <div className='card-body items-center text-center'>
                    <h2 className='card-title text-2xl mb-4'>Are You Sure?</h2>
                    <p className="mb-6">Do you really want to delete this gym member? This process cannot be undone.</p>
                    <div className="card-actions justify-center gap-4 w-full">
                        <button className='btn btn-outline flex-1' onClick={() => navigate('/')}>
                            Cancel
                        </button>
                        <button
                            className='btn btn-error flex-1'
                            onClick={handleDeleteMember}
                        >
                            Yes, Delete it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteMember;
