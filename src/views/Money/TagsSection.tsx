import styled from 'styled-components';

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 24px;
  flex-grow: 1;
  >ol{
    margin: 0 -12px;
    >li{
      border-radius: 18px;
      display: inline-block;
      font-size: 14px;
      text-align: center;
      margin: 8px 16.5px;
      .icon{
        background: #D9D9D9;
        padding: 12px;
        border-radius: 50px;
        width: 48px;
        height: 48px;
        fill: #fff;
        display: flex;
        margin-bottom: 2px;
      }
    }
  }
  > button{
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`
export {TagsSection}