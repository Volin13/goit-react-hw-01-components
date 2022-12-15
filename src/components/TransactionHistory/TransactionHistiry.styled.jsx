import styled from 'styled-components';

export const StyledTable = styled.table`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #93979b;

  margin: 50px auto;
  text-align: center;
  .styledCase {
    background-color: white;
  }
  .styledCase:nth-child(2n) {
    background-color: #ecf1f4;
  }
  .styledCase td {
    text-transform: capitalize;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 28px;
    border-right: 1px solid #cccccc;
  }
  .styledHead th {
    background-color: #00bcd5;
    padding: 30px 200px;
    text-transform: uppercase;
    font-size: 25px;
    color: white;
  }
`;
