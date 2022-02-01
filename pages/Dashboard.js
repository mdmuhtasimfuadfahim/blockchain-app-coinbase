import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Dashboard = ({address}) =>{
    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <Header walletAddress = {address}/>
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div `
 display: flex;
 height: 100vh;
 width: 100vw;
 background-color: black;
 color: white;
 overflow: scroll;
`


const MainContainer = styled.div`
 flex: 1;
`