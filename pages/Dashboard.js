import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from 'ethers';

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
        ethers.getDefaultProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    )
)

const Dashboard = ({address}) =>{
    const [sanityTokens, setSanityTokens] = useState([]);
    const [ thirdWebTokens, setThirdWebTokens] = useState([]);
    useEffect(() =>{
        const getSanityAndThirdWebTokens = async () =>{
            const coins = await fetch("https://sd01tic7.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'coins'%5D%7B%0A%20%20name%2C%0A%20%20bdtPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D");
            const sanityTokens = (await coins.json()).result;
            setSanityTokens(sanityTokens);

            setThirdWebTokens(
                sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
            ) 
        }
        return getSanityAndThirdWebTokens();
    }, [])
    return <Wrapper>
        <Sidebar />
        <MainContainer>
            <Header 
                walletAddress={address} 
                sanityTokens={sanityTokens} 
                thirdWebTokens={thirdWebTokens} 
            />
            <Main 
                walletAddress={address} 
                sanityTokens={sanityTokens} 
                thirdWebTokens={thirdWebTokens} 
            />
        </MainContainer>
    </Wrapper>
}

export default Dashboard

const Wrapper = styled.div `
 display: flex;
 height: 100vh;
 width: 100vw;
 background-color: black;
 color: white;
 overflow-y: scroll;
 :: -webkit-scrollbar{
     display: none;
 }
`


const MainContainer = styled.div`
 flex: 1;
`