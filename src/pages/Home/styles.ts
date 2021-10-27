import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const AnimesSection = styled.section`
  padding: 1rem;

  ul {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li{
      margin: 1em 1em;
    }
  }
`;

export const Loading = styled.img`
  width: 5rem;
`;

export const SearchHeader = styled.header`
  width: 100%;
  padding: 1rem;
`;
