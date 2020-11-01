import React from 'react';
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
          host: "https://remotemysql.com/",
          user: "Vi7WpVfpJY",
          database: "Vi7WpVfpJY",
          password: "6tQNMUIOBL"
        });
        var outputBase = 0;
        if(queryParams('vk_is_app_user') == 0){

        } else {
          connection.query('SELECT data FROM app WHERE id=?', [queryParams('vk_id')], function(result){
            var outputBase = result;
          });
        }

        return (
            <View activePanel="main">
                <Panel id="main">
                    <PanelHeader>Launch params</PanelHeader>
                    <Group title="Query params">
                        <List>
                        {outputBase}
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
