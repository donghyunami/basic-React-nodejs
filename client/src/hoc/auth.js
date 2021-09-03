import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function auth_ (SpecificComponent, option, adminRoute = null) {
    function AuthenticaionCheck(props) {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(auth().then(res => {
                console.log(res)
            }))
         }, [])
    }

    return AuthenticaionCheck;
}

/* 
  SpecificComponent: 각 컴포넌트를 인자로 받음

   option: 인증 체크 부분, null, true, false의 인자를 받음
   - null: 아무나 출입이 가능한 페이지
   - true: 로그인한 유저만 출입이 가능한 페이지
   - false: 로그인한 유저는 출입 불가능한 페이지

   adminRoute: admin 유저인지 판단, true의 인자를 받음 
    - 기본값: null
    - true: admin 유저만 출입가능한 페이지
*/