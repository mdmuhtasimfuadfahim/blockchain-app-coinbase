import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BuyTrade from "./BuyTrade";
import SellTrade from "./SellTrade";
import CoinSelector from './CoinSelector';


const TradeModal = ({
    walletAddress, 
    sanityTokens, 
    thirdWebTokens
}) =>{
    const [action, setAction] = useState('buy')
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0])


    const tradeSelectedStyle = {
        color: '#3773f5',
    }

    const tradeUnselectedStyle = {
        border: '1px solid #282b2f',
    }

    const tradeSelectedModal = option =>{
        switch(option){
            case 'buy':
                return <BuyTrade
                   thirdWebTokens={thirdWebTokens}
                   selectedToken={selectedToken}
                   walletAddress={walletAddress}
                   setAction={setAction} 
                />
            case 'sell':
                return <SellTrade
                setAction={setAction} 
                />
            case 'select':
                return <CoinSelector
                setAction={setAction}
                selectedToken={selectedToken}
                thirdWebTokens={thirdWebTokens}
                walletAddress={walletAddress}
                setSelectedToken={setSelectedToken}
                sanityTokens={sanityTokens}
            />
            default:
                return <h2>send</h2>
        }
    }
    return (
        <Wrapper>
        <Selector>
            <Option style={action === 'buy' ? tradeSelectedStyle : tradeUnselectedStyle} onClick={() => setAction('buy')}>
              <p>Buy</p>
            </Option>
            <Option style={action === 'sell' ? tradeSelectedStyle : tradeUnselectedStyle} onClick={() => setAction('sell')}>
              <p>Sell</p>
            </Option>
        </Selector>
        <ModalMain>
            {tradeSelectedModal(action)}
        </ModalMain>
    </Wrapper>
    )
}


export default TradeModal

const Wrapper = styled.div`
overflow-y: scroll;
:: -webkit-scrollbar{
   display: none
}
 height: 35rem;
 width: 40rem;
 color: white;
 border: 1px solid #282b2f;
 display: flex;
 flex-direction: column;
`

const Selector = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 height: 5rem;
`

const Option = styled.div`
 height: 100%;
 width: 100%;
 display: grid;
 place-items: center;
 font-size: 1.2rem;
 font-weight: 600;

 &:hover{
     cursor: pointer;
     beackground-color: #111214;
 }
`


const ModalMain = styled.div`
 cursor: pointer;
 background-color: #111214;
`