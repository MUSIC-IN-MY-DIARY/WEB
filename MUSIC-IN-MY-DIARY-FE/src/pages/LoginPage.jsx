import { useState } from 'react';
import Card from '../components/common/Card';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('로그인 성공!');
        // 로그인 성공 후 처리 (예: 토큰 저장, 리다이렉트 등)
      } else {
        alert('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
      <h2 className='text-2xl font-bold mb-4 text-center text-white'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
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
          Submit
        </button>
      </form>
    </Card>
  );
};

export default LoginPage;
