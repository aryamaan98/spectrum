// @flow
import theme from 'shared/theme';
// $FlowFixMe
import styled from 'styled-components';

export const Heading = styled.h1`
  margin-left: 16px;
  font-size: 32px;
  color: ${theme.text.default};
  font-weight: 800;
`;

export const Subheading = styled.h3`
  margin-left: 16px;
  font-size: 16px;
  color: ${theme.text.alt};
  font-weight: 500;
  line-height: 1;
  margin-bottom: 8px;
`;

export const StyledHeader = styled.div`
  display: flex;
  padding: 32px;
  border-bottom: 1px solid ${theme.bg.border};
  background: ${theme.bg.default};
  width: 100%;
  align-items: center;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledThreadListItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.bg.border};
  padding: 16px 0;
  flex-direction: column;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
export const ThreadListItemTitle = styled.h4`
  font-size: 16px;
  color: ${theme.text.default};
  line-height: 1.28;
  font-weight: 500;

  &:hover {
    color: ${theme.brand.alt};
  }
`;

export const ThreadListItemSubtitle = styled.h5`
  font-size: 14px;
  color: ${theme.text.alt};
  line-height: 1.28;
  margin-top: 4px;

  a:hover {
    color: ${theme.text.default};
  }
`;

export const UserListItemContainer = styled.div`
  padding: 0 16px;
  border-bottom: 1px solid ${theme.bg.wash};
`;
