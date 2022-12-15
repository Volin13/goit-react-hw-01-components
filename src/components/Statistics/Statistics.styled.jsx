import styled from 'styled-components';

const StyledItem = styled.section`
  width: 500px;
  background-color: white;
  margin: auto;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-basis: calc(100% / 5);
    font-size: 25px;
    padding: 20px;
    color: white;
  }
  .title {
    text-transform: uppercase;
    font-size: 30px;
    padding: 30px;
  }
  .label {
    font-size: 20px;
  }
  .stat_list {
    list-style: none;
    display: flex;
  }
  .doc {
    background-color: #4fc4f9;
  }
  .pdf {
    background-color: #a43cf4;
  }
  .mp {
    background-color: #e64b64;
  }
  .psd {
    background-color: #20b8c5;
  }
`;

export default StyledItem;
