import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MembersList from './pages/MembersList';
import CreateMember from './pages/CreateMember';
import ShowMember from './pages/ShowMember';
import EditMember from './pages/EditMember';
import DeleteMember from './pages/DeleteMember';
import MembershipPlans from './pages/MembershipPlans';

const App = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/members/create" element={<CreateMember />} />
          <Route path="/members/details/:id" element={<ShowMember />} />
          <Route path="/members/edit/:id" element={<EditMember />} />
          <Route path="/members/delete/:id" element={<DeleteMember />} />
          <Route path="/membership" element={<MembershipPlans />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
