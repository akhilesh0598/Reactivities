import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters()
{
    return (
        <>
        <Header>
        <Menu vertical size="large" style={{width:'100%',marginTop:25}}>
            <Header attached color="teal">
                <Menu.Item content='All Activities'/>
                <Menu.Item content="I'm going"/>
                <Menu.Item content="I'm hosting"/>
            </Header>
        </Menu>
        <Calendar/>
        </Header>
        </>
    );
}