import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {BsThreeDotsVertical} from 'react-icons/bs'
import { coins } from '../static/coins';
import Coin from './Coin';
import BalanceChart from "./BalanceChart";


const Portfolio = ({thirdWebTokens, sanityTokens, walletAddress}) =>{
    // console.log(thirdWebTokens, "from portfolio")
    // thirdWebTokens[2]
    //   .balanceOf(walletAddress)
    //   .then(balance => console.log(Number(balance.displayValue) * 3100))



    // convert all of my tokens to tk
    const [walletBalance, setWalletBalance] = useState(0)
    const tokentoBDT = {};
    for (const token of sanityTokens){
        tokentoBDT[token.contractAddress] = Number(token.bdtPrice)
    }
    
    useEffect(() => {
        const calculateTotalBalance = async () =>{
            const totalBalance = await Promise.all(
                thirdWebTokens.map(async token =>{
                    const balance = await token.balanceOf(walletAddress);
                    return (
                        Number(balance.displayValue) * tokentoBDT[token.address]
                    );
                })
            )
            // console.log('Total Balance: ', totalBalance)
            setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0))
            // setWalletBalance(total)
        }
        return calculateTotalBalance()
    }, [thirdWebTokens, sanityTokens])

    // calculateTotalBalance()

    return (
    <Wrapper>
        <Content>
        <Chart>
            <div>
                <Balance>
                    <BalanceTitle>Portfolio Balance</BalanceTitle>
                    <BalanceValue>
                        {'৳'}
                        {walletBalance.toLocaleString()}
                    </BalanceValue>
                </Balance>
            </div>
            <BalanceChart />
        </Chart>
        <PortfolioTable>
        <TableItem>
            <Title>Your Asstes</Title>
        </TableItem>
        <Divider />
        <Table>
            <TableItem>
                <TableRow>
                    <div style={ {flex: 2}}>Name</div>
                    <div style={ {flex: 2}}>Balance</div>
                    <div style={ {flex: 2}}>Price</div>
                    <div style={ {flex: 1}}>Allocation</div>
                    <div style={ {flex: 0}}><BsThreeDotsVertical/></div>
                </TableRow>
            </TableItem>
            <Divider />
            <div>
                {coins.map(coin => (
                    <div>
                        <Coin coin={coin} />
                        <Divider />
                    </div>
                ))}
            </div>
        </Table>
    </PortfolioTable>
        </Content>
    </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
 width: 100%;
 max-width: 1000px;
 padding: 2rem 1rem;
 overflow-y: scroll;
 :: -webkit-scrollbar{
    display: none;
}
`

const PortfolioTable = styled.div`
 margin-top: 1rem;
 border: 1px solid #282b2f;
`

const Table = styled.div`
 width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
      text-align: left;
  }
`
const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
 color: #8a919e;
 font-size: 0.9rem;
`

const BalanceValue = styled.div`
 font-size: 1.8rem;
 font-weight: 700;
 margin: 0.5rem 0;
`

const TableItem = styled.div`
 padding: 1rem 2rem;
`

const Divider = styled.div`
 border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
 font-size: 1.5rem;
 font-weight: 600;
`