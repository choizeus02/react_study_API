import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [name, setName] = useState('');
    const [loginId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeName = (e) => setName(e.target.value);
    const onChangeUserId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault();  // 기본 폼 제출 방지
        try {
            const response = await fetch('http://116.121.184.161:9000/members/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    loginId: loginId,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error('회원가입 요청 실패');
            }
            const data = await response.json();
            console.log('회원가입 성공:', data);
            navigate('/main');
        } catch (error) {
            console.error('회원가입 에러:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="이름" value={name} onChange={onChangeName} />
            <input type="text" placeholder="아이디" value={loginId} onChange={onChangeUserId} />
            <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
            <button type="submit">회원가입</button>
        </form>
    );
};

export default LoginPage;
