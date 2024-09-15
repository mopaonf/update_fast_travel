import React, { useState } from 'react';
import { useCreateUserMutation } from '../../store/api/UserApi'; 
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/slices/AuthSlice'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ data: formData }).unwrap();
      dispatch(loginSuccess({ token: response }));
      // Redirect or handle successful signup
    } catch (error) {
      dispatch(loginFailure());
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-neutral-100">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 rounded-md"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {isError && <p className="text-red-500 mt-2">Sign Up failed. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;