import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper =styled.section`
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
`;
const NoteSection:React.FC=()=>{
    const [note,setNote] = useState("")
    console.log(note);
    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这添加备注"
                       value={note}
                       onChange={(e)=> setNote(e.target.value)}
                />
            </label>
        </Wrapper>
    )
}

export {NoteSection}