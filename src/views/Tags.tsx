import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size: 16px;

  > li {
    border-bottom: 1px solid #d5d5d5;
    padding: 10px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: 20px;
      height: 20px;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #2950EB;
  border-radius: 4px;
  color: white;
`

const Center =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Space = styled.div`
  height: 32px;
`

function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}>
                    <span className="oneLine">{tag}哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                    <Icon name="right"></Icon>
                </li>)}
            </TagList>
            <Center>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;