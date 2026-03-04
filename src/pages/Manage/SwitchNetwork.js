import styled from 'styled-components'
import Option from '../../components/WalletModal/Option'
import { CURRENCY } from '../../assets/images'
import { networks } from '../../constants/networksInfo'
import { useWeb3React } from '../../hooks/useWeb3ReactShim'
import { switchInjectedNetwork } from '../../utils/utils'

const Title = styled.strong`
  display: block;
  text-align: center;
  margin: 0 0 0.6rem;
  padding: 0;
`

const Options = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 23rem;
  padding: 0.6rem;
  border-radius: 0.8rem;
  border: 1px solid #232227;
  box-shadow: inset 0 0 0.2rem #232227;

  ${({ disabled }) => (disabled ? 'pointer-events: none; opacity: 0.6' : '')};
`

const Holder = styled.div`
  width: 100%;
`

export default function SwitchNetwork(props) {
  const {
    aviableChainIds
  } = props

  const { connector } = useWeb3React()

  const trySwitch = async (chainId) => {
    await switchInjectedNetwork(chainId)
  }

  const getNetworkOptions = () => {
    return aviableChainIds.map((chainId) => (
      <Option
        onClick={() => { trySwitch(chainId) }}
        id={`connect-network-${chainId}`}
        key={chainId}
        color={networks[chainId]?.color || ''}
        header={networks[chainId].name}
        subheader={null}
        icon={CURRENCY[chainId] ?? ''}
        size={45}
      />
    ))
  }

  return (
    <Holder>
      <Title>Select another networks:</Title>
      <Options>{getNetworkOptions()}</Options>
    </Holder>
  )
}