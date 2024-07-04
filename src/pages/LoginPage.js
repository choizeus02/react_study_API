import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [loginId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeUserId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault();  // 기본 폼 제출 방지
        try {
            const response = await fetch('http://localhost:9000/login_try', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    loginId: loginId,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error('로그인 요청 실패');
            }
            console.log('로그인 성공:');
            navigate('/session');
        } catch (error) {
            console.error('로그인 에러:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="아이디" value={loginId} onChange={onChangeUserId} />
            <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
            <button type="submit">로그인</button>
        </form>
    );
};

export default LoginPage;
