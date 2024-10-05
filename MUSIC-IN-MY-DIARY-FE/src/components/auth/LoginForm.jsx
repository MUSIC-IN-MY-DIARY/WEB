import { useState } from 'react';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // 로그인 성공 처리
        console.log('로그인 성공:', data);
        // 여기에 로그인 성공 후 처리 로직 추가 (예: 리다이렉트, 상태 업데이트 등)
      } else {
        const errorData = await response.json();
        setError(errorData.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      setError('서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userEmail'>사용자 이메일:</label>
          <input
            type='text'
            id='userEmail'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>비밀번호:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
