import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 24px;
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
const NotesSection =styled.section`

`
const CategorySection =styled.section`

`
const NumberPadSection =styled.section`

`


function Money() {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li><Icon name="clothes"/>衣服</li>
                    <li><Icon name="foods"/>食物</li>
                    <li><Icon name="house"/>房子</li>
                    <li><Icon name="travel"/>出行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}
export default Money;