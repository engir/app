import React from 'react';
import mysql2 from 'mysql2';
import {Cell, Group, List, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    parseQueryString = (string) => {
        return string.slice(1).split('&')
            .map((queryParam) => {
                let kvp = queryParam.split('=');
                return {key: kvp[0], value: kvp[1]}
            })
            .reduce((query, kvp) => {
                query[kvp.key] = kvp.value;
                return query
            }, {})
    };


    render() {
        const queryParams = this.parseQueryString(window.location.search);
        const hashParams = this.parseQueryString(window.location.hash);

        const mysql = require("mysql2");

        const connection = mysql.createConnection({
          host: "remotemysql.com",
          port: 3306,
          user: "Vi7WpVfpJY",
          database: "Vi7WpVfpJY",
          password: "6tQNMUIOBL"

        });


        return (
            <View activePanel="main">
                <Panel id="main">
                    <PanelHeader>Launch params</PanelHeader>
                    <Group title="Query params">
                        <List>
                            {Object.keys(queryParams).map((key) => {
                                let value = queryParams[key];
                                return <Cell description={key}> {value ? value : <span style={{color: 'red'}}>-</span>}</Cell>;
                            })}
                        </List>
                    </Group>

                    <Group title="Hash params">
                        <List>
                            {Object.keys(hashParams).map((key) => {
                                let value = hashParams[key];
                                return <Cell description={key}>{value ? value : <span style={{color: 'red'}}>-</span>}</Cell>;
                            })}
                        </List>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
