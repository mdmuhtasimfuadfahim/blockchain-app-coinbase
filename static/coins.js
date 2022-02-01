import btcLogo from '../assets/btc.png'
import maticLogo from '../assets/matic.png'
import dogeLogo from '../assets/doge.png'
import ethLogo from '../assets/eth.png'
import lunaLogo from '../assets/luna.png'
import solLogo from '../assets/sol.png'

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    balanceUsd: 23282200.62,
    balanceCoin: 7,
    priceUsd: 3326028.66,
    change: -4.74,
    allocation: 41.89,
  },
  {
    name: 'Solana',
    sign: 'SOL',
    logo: solLogo,
    balanceUsd: 17873.5,
    balanceCoin: 50,
    priceUsd: 357.47,
    change: 4.74,
    allocation: 41.89,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    balanceUsd: 36.7,
    balanceCoin: 10,
    priceUsd: 3.67,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    balanceUsd: 3592928.7,
    balanceCoin: 15,
    priceUsd: 239528.58,
    change: 6.24,
    allocation: 17.89,
  }
]
