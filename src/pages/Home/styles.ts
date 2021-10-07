import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AnimesSection = styled.section`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ul {
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  li{
    margin: 0 auto;
    padding: 10px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Loading = styled.img`
  width: 5rem;
`;

export const SearchHeader = styled.header`
  width: 100%;
  padding: 1rem;
`;
