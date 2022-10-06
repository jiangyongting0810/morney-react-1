import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    //内部内容flex布局
    display: flex;
    //上下居中
    align-items: center;

    > span {
      margin-right: 16px;
      //文字不换行
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
    value: string
    onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
    const note = props.value;
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (refInput.current !== null) {
            props.onChange(refInput.current.value);
        }
    };
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这添加备注"
                       ref={refInput}
                       defaultValue={note}
                       onBlur={onBlur}
                />
            </label>
        </Wrapper>
    );
};

export {NoteSection};