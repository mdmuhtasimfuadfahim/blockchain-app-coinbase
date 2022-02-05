import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "../../lib/sanity";
import { FaWallet } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiCopy } from 'react-icons/bi';


const BuyTrade = ({
    selectedToken, 
    setAction, 
    walletAddress, 
    thirdWebTokens
}) =>{
    const [imageUrl, setImageUrl] = useState(null)
    const [copied, setCopied] = useState(false)
    const [activeThirdWebToken, setActiveThirdWebToken] = useState()
    const [balance, setBalance] = useState('Fetching...')

    useEffect(() => {
        const activeToken = thirdWebTokens.find(
            token => token.address === selectedToken.contractAddress
        )
        setActiveThirdWebToken(activeToken)
    }, [thirdWebTokens, selectedToken])

    useEffect(() =>{
        const url = imageUrlBuilder(client).image(selectedToken.logo).url()
        setImageUrl(url)
    }, [selectedToken])

    useEffect(() => {
        const getBalance = async () =>{
            const balance = await activeThirdWebToken.balanceOf(walletAddress)
            setBalance(balance.displayValue)
        }
        if(activeThirdWebToken){
            getBalance()
        }
    }, [activeThirdWebToken])
    return (
        <Wrapper>
            <Content>
                <QRContainer>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${walletAddress}`} alt="" />
                </QRContainer>
                <Divider />
            <TradeForm>

                <Row>
                    <FieldName>Pay for</FieldName>
                    <CoinSelectList 
                    onClick={() => setAction('select')}
                    >
                        <Icon>
                            <img src={imageUrl} alt="" />
                        </Icon>
                        <CoinName>{selectedToken.name}</CoinName>
                        <Balance>{balance} {selectedToken.symbol}</Balance>
                    </CoinSelectList>
                </Row>
                <Row>
                    <FieldName>
                       Wallet Address
                    </FieldName>
                    <Icon>
                            <img src={imageUrl} alt="" />
                    </Icon>
                    <CoinName>{walletAddress.slice(0,7)} ... {walletAddress.slice(35)}</CoinName>
                    

               </Row>
                <Row>
                    <FieldName>Card Number</FieldName>
                    <Icon>
                        <FaWallet />
                    </Icon>
                    <PlaceHolder 
                       placeholder="Card Number"
                    />
                </Row>
            </TradeForm>
            </Content>
        </Wrapper>
    )
}


export default BuyTrade

const Wrapper = styled.div`
overflow-y: scroll;
:: -webkit-scrollbar{
   display: none
}
 height: 100%;
`
const Content = styled.div`

 border: 1px solid #282b2f;
 border-radius: 0.5rem;
 display: flex;
 flex-direction: column;
 height: 100%;
`

const QRContainer = styled.div`
 padding: 2.4rem 2rem;
 flex: 1;
 display: grid;
 place-items: center;
`

const Divider = styled.div`
 border-bottom: 1px solid #282b2f;
`

const Row = styled.div`
 display: flex;
 width: 100%;
 padding: 1rem;
 align-items: center;
 justify-content: space-between;
 color: #8a919e;
 font-size: 1.2rem;
`

const Icon = styled.div`
margin-right: 1rem;
height: 1.8rem;
width: 1.8rem;
border-radius: 50%;
overflow: hidden;
display: grid;
place-items: center;

& > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
}
`

const CoinSelectList = styled.div`
 display: flex;
 flex: 2.4;
 height: 100%;

 &:hover {
     cursor: pointer;
 }
`
const FieldName = styled.div`
 flex: 0.5rem;
 padding-left: 2rem;
`


const CoinName = styled.div`
 flex: 1;
 border: none;
 background: none;
 outline: none;
 color: white;
 font-size: 1.2rem;
 text-wrap: wrap;
 margin-right: 0.5rem;
`
const TradeForm = styled.div`
 margin-left: 7px;
 margin-right: 7px;
 border: 1px solid #282b2f;
 border-radius: 0.4rem;
`

const Title = styled.div`
 color: white;
 margin-bottom: 0.5rem;
`

const Address = styled.div`
 font-size: 0.8rem;
`

const CopyButton = styled.div`
 cursor: pointer;
`
const PlaceHolder = styled.input`
 flex: 1;
 bprder: none;
 background: none;
 outline: none;
 color: white;
 font-size: 1.2rem;
 text-wrap: wrap;
 margin-right: 0.5rem;
`
const Balance = styled.div`
margin-right: 8px;
 
`