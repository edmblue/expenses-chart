import './index.css';
import Logo from './assets/images/logo.svg';
import styled from '@emotion/styled';
import Chart from './components/Chart';
import Data from './data/data.json';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 29rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const Header = styled.div`
  background: var(--primary-soft-red);
  display: flex;
  padding: 1.5rem 2rem;
  border-radius: 0.8rem;
  color: #fff;
  justify-content: space-between;
`;

const Balance = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Main = styled.main`
  background-color: var(--neutral-very-pale-orange);
  padding: 1.8rem;
  margin-top: 1.4rem;
  border-radius: 1rem;
  color: var(--neutral-dark-brown);
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  border-bottom: 1px solid var(--neutral-cream);
  padding: 1.5rem 0;
`;

const Title = styled.h1`
  font-size: 1.7rem;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;
  align-items: center;
`;

const SmallText = styled.p`
  font-size: 0.7rem;
  color: var(--neutral-medium-brown);
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const Percentage = styled.p`
  font-weight: 700;
  text-align: right;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderInfo>
            <p>My balance</p>
            <Balance>$921.48</Balance>
          </HeaderInfo>
          <img src={Logo} />
        </Header>
        <Main>
          <div>
            <Title>Spending - Last 7 days</Title>
            <CanvasContainer>
              <Chart Data={Data} />
            </CanvasContainer>
            <Summary>
              <div>
                <SmallText>Total this month</SmallText>
                <Price>$478.33</Price>
              </div>
              <div>
                <Percentage>+2.4%</Percentage>
                <SmallText>from last month</SmallText>
              </div>
            </Summary>
          </div>
        </Main>
      </Container>
    </Wrapper>
  );
}
export default App;
