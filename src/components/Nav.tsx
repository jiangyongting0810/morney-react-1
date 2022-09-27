import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background:white;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 16px;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        color:#D6D6D6;
        .icon {
          width: 20px;
          height: 20px;
        }
        &.selected{
          color: #2950EB;
          .icon{
            fill: #2950EB;
          }
        }
      }
    }
  }

`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计页面
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;