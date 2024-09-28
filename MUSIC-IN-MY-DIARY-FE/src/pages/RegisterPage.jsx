import { useState } from 'react';
import Card from '../components/common/Card';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <Card>
      <h2 className='text-2xl font-bold mb-4 text-center text-white'>
        회원가입
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          name='username'
          placeholder='사용자 이름'
          onChange={handleChange}
          className='w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-200'
        />
        <input
          type='email'
          name='email'
          placeholder='이메일'
          onChange={handleChange}
          className='w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-200'
        />
        <input
          type='password'
          name='password'
          placeholder='비밀번호'
          onChange={handleChange}
          className='w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-200'
        />
        <button
          type='submit'
          className='w-full p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
        >
          가입하기
        </button>
      </form>
    </Card>
  );
};

export default RegisterPage;
