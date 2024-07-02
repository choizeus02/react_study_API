// LoginPage.js
import React from 'react';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={() => navigate('/login')}>로그인</button>
            <button onClick={() => navigate('/logout')}>로그아웃</button>
            <button onClick={() => navigate('/SignUpPage')}>회원가입</button>
            <button onClick={() => navigate('/session')}>세션 확인</button>
        </div>
    );
}

export default LoginPage;
