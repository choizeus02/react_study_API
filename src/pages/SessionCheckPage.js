import React, { useState, useEffect } from 'react';

const SessionCheck = () => {
    const [sessionMessage, setSessionMessage] = useState('');

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch('http://116.121.184.161:9000/session-info', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.text(); // 문자열로 반환받음
                    setSessionMessage(data);
                } else {
                    setSessionMessage('세션을 확인할 수 없습니다.test1');
                }
            } catch (error) {
                console.error('세션 확인 중 오류 발생:', error);
                setSessionMessage('세션 확인 중 오류가 발생했습니다.');
            }
        };

        checkSession();
    }, []);

    return (
        <div>
            <h1>Session Check Page</h1>
            <p>{sessionMessage}</p>
        </div>
    );
}

export default SessionCheck;

