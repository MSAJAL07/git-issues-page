import "./style.css"

import CodeSVG from '../../svg/CodeSVG';
import IssueOpenedSVG from '../../svg/IssueOpenedSVG';
import PrSVG from '../../svg/PrSVG';
import ProjectSVG from '../../svg/ProjectSVG';
import InsightsSVG from '../../svg/InsightsSVG';
import styled from "styled-components";



const NavigationItemWrapper = styled.div`
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    color: ${props => (props.selected ? '#24292e' : '#586069')};
    float: left;
    padding: 7px 15px 8px;
    white-space: nowrap;
    background-color : ${props => props.selected && '#fff'};
    border-color : ${props => props.selected && '#e36209 #e1e4e8 transparent'};
    cursor : pointer;
    &:hover {
     color : #000;
    }
    @media (${props => props.name != "Code" && props.name != "Issues"}) and (max-width: 400px) {

        display: none;
}
  `;

const NavigationItemAnchor = styled.a`
    text-decoration : none;
    color : #586069;
`;

const NavigationItemValue = styled.span`
    background-color: rgba(27,31,35,.08);
    border-radius: 20px;
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    padding: 2px 5px;
    margin-left: 2px;
`;


const NavigationItem = ({
    name, selected, value, url,
}) => (

    < NavigationItemWrapper name={name} selected={selected} className={`${(name != "Code" && name != "Issues") ? "hide" : ""}`}>
        {name === 'Code' && <CodeSVG />}
        {name === 'Issues' && <IssueOpenedSVG selected />}
        {name === 'Pull Requests' && <PrSVG />}
        {name === 'Projects' && <ProjectSVG />}
        {name === 'Insights' && <InsightsSVG />}
        <NavigationItemAnchor href={url}>{name}</NavigationItemAnchor>
        <NavigationItemValue>{value}</NavigationItemValue>

        {/* <span>{value}</span> */}
    </NavigationItemWrapper>
);

export default NavigationItem;