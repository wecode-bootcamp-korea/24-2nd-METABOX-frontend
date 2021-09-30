import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DIVIDE_CATEGORIES = 6;

function SiteMap({ isDisplayed }) {
  return (
    <TopWrapper isDisplayed={isDisplayed}>
      <Wrapper>
        <MenuTitle>SITEMAP</MenuTitle>
        <SiteMapUpperWrapper>
          {categories.slice(0, DIVIDE_CATEGORIES).map(category => (
            <SubCategories key={category.id}>
              <SubCategoriesTitle>{category.categoryName}</SubCategoriesTitle>

              {category.subcategories.map((subcategory, index) => (
                <SubCategory key={index}>
                  <SubCategoryLink to="">
                    {subcategory.categoryName}
                  </SubCategoryLink>
                </SubCategory>
              ))}
            </SubCategories>
          ))}
        </SiteMapUpperWrapper>

        <SiteMapLowerWrapper>
          {categories
            .slice(DIVIDE_CATEGORIES, categories.length)
            .map((category, index) => (
              <SubCategories key={index}>
                {category.categoryName ? (
                  <SubCategoriesTitle>
                    {category.categoryName}
                  </SubCategoriesTitle>
                ) : null}

                {category.subcategories
                  ? category.subcategories.map((subcategory, index) => (
                      <SubCategory key={index}>
                        <SubCategoryLink to="">
                          {subcategory.categoryName}
                        </SubCategoryLink>
                      </SubCategory>
                    ))
                  : ''}
              </SubCategories>
            ))}
        </SiteMapLowerWrapper>
      </Wrapper>
    </TopWrapper>
  );
}

const TopWrapper = styled.div`
  position: absolute;
  top: 90px;
  width: 100%;
  display: ${props => (props.isDisplayed ? 'flex' : 'none')};
  justify-content: center;
  background-color: #333;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const MenuTitle = styled.p`
  font-size: 1.5em;
  color: #fff;
  line-height: 1.1;
  padding: 0;
  margin: 0;
`;

const SiteMapUpperWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const SiteMapLowerWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  margin-top: -230px;
`;

const SubCategories = styled.ul`
  width: 170px;
  padding: 0;
  text-align: center;
`;

const SubCategory = styled.li`
  padding-bottom: 10px;
`;

const SubCategoryLink = styled(Link)`
  color: #bbb;
`;

const SubCategoriesTitle = styled.p`
  text-align: center;
  border-width: 1px 0;
  border-color: rgba(68, 68, 68, 0.5);
  border-style: solid;
  padding: 12px 0;
  font-size: 1.2em;
  color: #fff;
  margin: 20px 0;
`;

export default SiteMap;

const categories = [
  {
    id: 1,
    categoryName: '영화',
    subcategories: [
      {
        id: 1,
        categoryName: '전체영화',
      },
      {
        id: 2,
        categoryName: '큐레이션',
      },
      {
        id: 3,
        categoryName: '영화제',
      },
      {
        id: 4,
        categoryName: '무비포스트',
      },
    ],
  },
  {
    id: 2,
    categoryName: '예매',
    subcategories: [
      {
        id: 1,
        categoryName: '빠른예매',
      },
      {
        id: 2,
        categoryName: '상영시간표',
      },
      {
        id: 3,
        categoryName: '더 부티크 프라이빗 예매',
      },
    ],
  },
  {
    id: 3,
    categoryName: '극장',
    subcategories: [
      {
        id: 1,
        categoryName: '전체극장',
      },
      {
        id: 2,
        categoryName: '특별관',
      },
    ],
  },
  {
    id: 4,
    categoryName: '이벤트',
    subcategories: [
      {
        id: 1,
        categoryName: '진행중 이벤트',
      },
      {
        id: 2,
        categoryName: '지난 이벤트',
      },
      {
        id: 3,
        categoryName: '당첨자발표',
      },
    ],
  },

  {
    id: 5,
    categoryName: '스토어',
    subcategories: [
      {
        id: 1,
        categoryName: '새로운 상품',
      },
      {
        id: 2,
        categoryName: '메가티켓',
      },
      {
        id: 3,
        categoryName: '메가찬스',
      },
      {
        id: 4,
        categoryName: '팝콘/음료/굿즈',
      },
      {
        id: 5,
        categoryName: '나의 메가박스',
      },
    ],
  },
  {
    id: 6,
    categoryName: '나의 메가박스 홈',
    subcategories: [
      {
        id: 1,
        categoryName: '예매/구매내역',
      },
      {
        id: 2,
        categoryName: '영화관람권',
      },
      {
        id: 3,
        categoryName: '스토어교환권',
      },
      {
        id: 4,
        categoryName: '할인/제휴쿠폰',
      },
      {
        id: 5,
        categoryName: '멤버십포인트',
      },
      {
        id: 6,
        categoryName: '나의 무비스토리',
      },
      {
        id: 7,
        categoryName: '나의 이벤트 응모내역',
      },
      {
        id: 8,
        categoryName: '나의 문의내역',
      },
      {
        id: 9,
        categoryName: '자주쓰는 할인 카드',
      },
      {
        id: 10,
        categoryName: '회원정보',
      },
    ],
  },
  {
    id: 7,
    categoryName: '이벤트',
    subcategories: [
      {
        id: 1,
        categoryName: '진행중 이벤트',
      },
      {
        id: 2,
        categoryName: '지난 이벤트',
      },
      {
        id: 3,
        categoryName: '당첨자발표',
      },
    ],
  },

  {
    id: 8,
    categoryName: '이벤트',
    subcategories: [
      {
        id: 1,
        categoryName: '진행중 이벤트',
      },
      {
        id: 2,
        categoryName: '지난 이벤트',
      },
      {
        id: 3,
        categoryName: '당첨자발표',
      },
    ],
  },
  {
    id: 9,
    categoryName: '나의 메가박스 홈',
    subcategories: [
      {
        id: 1,
        categoryName: '예매/구매내역',
      },
      {
        id: 2,
        categoryName: '영화관람권',
      },
      {
        id: 3,
        categoryName: '스토어교환권',
      },
    ],
  },
  {},
  {},
  {},
];
