

import './style.css'
import NavigationItem from '../navItem';
import styled from 'styled-components';
import RepoLogoSVG from '../../svg/RepoLogoSVG';

const navigationValues = [
    {
        name: 'Code', selected: false, url: '#',
    },
    {
        name: 'Issues', value: 253, selected: true, url: '#',
    },
    {
        name: 'Pull Requests', value: 72, selected: false, url: '#',
    },
    {
        name: 'Projects', value: 2, selected: false, url: '#',
    },
    {
        name: 'Insights', selected: false, url: '#',
    },
];
const RepoTitleInfo = styled.div`
@media (max-width: 600px) {
        padding-top: 15px;
      }

`;
const Anchor = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  font-size : 18px;
  font-weight : ${props => (props.fontWeight
        ? props.fontWeight : 'none')}
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: purple;
  }
`;
const PathDivider = styled.span`
  margin: 0 .25em;
`;
const Navmenus = styled.div`
      display: flex;
      flex-direction: row;
      width: 88%;
      margin: 0 auto;
      padding-top : 10px;
      justify-content: ${props => props.row === 'first'
        && 'space-between'};

    //   @media (max-width: 600px) {
    //       flex-direction : column
    //       padding : 0px;
    //   }
`;
const Nav = () => {
    return (
        <div className="Nav">
            <Navmenus row="first">
                <RepoTitleInfo>
                    <RepoLogoSVG />
                    <Anchor
                        href={"#"}
                        color="#0366d6"
                    >
                        {"facebook"}
                    </Anchor>
                    <PathDivider>/</PathDivider>
                    <Anchor
                        color="#0366d6"
                        fontWeight="bold"
                        href={"#"}
                    >
                        {"react"}
                    </Anchor>
                </RepoTitleInfo>
            </Navmenus>
            <Navmenus row="second">
                {
                    navigationValues.map(item => (
                        <NavigationItem
                            key={item.name}
                            {...item}
                        />
                    ))
                }
            </Navmenus>
        </div>
    )

}

export default Nav;