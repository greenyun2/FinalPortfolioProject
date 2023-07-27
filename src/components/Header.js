import React from 'react'
import styled from "styled-components";
import { faBars, faCamera, faCartShopping, faMagnifyingGlass, faMagnifyingGlassLocation, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderInner = styled.div``;
const HeaderLogo = styled.div``;
const MobileHeaderMenu = styled.div``;
const HeaderMenuList = styled.nav``;
const HeaderMenuUl = styled.ul``;
const HeaderMenuLi = styled.li``;
const SearchBox = styled.div``;
const MobileMenuLogo = styled.div``;
const LoginJoinButton = styled.div``;


const Header = () => {
  return (
    <HeaderInner>

      <HeaderLogo>
        <a href='#'>
          <img src='' />
        </a>
      </HeaderLogo>

      <MobileHeaderMenu>
        <div className='menu_toggle_btn'> 
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <div className='header_title_section'> 
          <h1>Hugmom</h1>
        </div>
        <div class="cart_btn">
          <a href='#'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart_count">3</span>
          </a>
        </div>
      </MobileHeaderMenu>

      <HeaderMenuList>

        <div className='mobile_close_menu_btn'>
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <HeaderMenuUl>

          <HeaderMenuLi>
            <a href='#'>SHOP</a>
            <ul className="shop_malls">
              <li className="user_mall">
                <a href="#">산후조리원 회원 몰</a>
              </li>
              <li className="graduate_user_mall">
                <a href="#">산후조리원 졸업회원 </a>
              </li>
            </ul>
          </HeaderMenuLi>

          <HeaderMenuLi>
          <a href="#">LIVE</a>
          </HeaderMenuLi>

          <HeaderMenuLi>
          <a href="#">고객센터</a>
            <ul className="cs_menu_list">
              <li><a href="#">자주하는 질문</a></li>
              <li><a href="#">공지사항</a></li>
            </ul>
          </HeaderMenuLi>
          <li className='header_menu mobile_myPage'>
            <a href="#">마이페이지</a>
              <ul className="mobile_myPage_list">
                <li>
                  <a href="#">회원정보 확인</a>
                </li>
                <li>
                  <a href="#">회원정보 수정</a>
                </li>
                <li>
                  <a href="#">주문내역</a>
                </li>
              </ul>
          </li>
          <SearchBox>
            <input type='text' />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </SearchBox>
        </HeaderMenuUl>
      </HeaderMenuList>
    </HeaderInner>
  )
}

export default Header