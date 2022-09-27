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
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    //内部内容flex布局
    display: flex;
    //上下居中
    align-items: center;
    >span{
      margin-right: 16px;
      //文字不换行
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
const CategorySection =styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background: #c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
const NumberPadSection =styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
  }
  > .pad{
    >button{
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: 0.5px solid #f5f5f5;
      background: white;
      
      &.ok{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
    }
  }
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
                    <input type="text" placeholder="在这添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">100</div>
                <div className="pad clearfix">
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
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}
export default Money;