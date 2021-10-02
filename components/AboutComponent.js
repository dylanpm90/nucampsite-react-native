import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { PARTNERS } from '../shared/partners';

function Mission(){
    return (
    <Card title='Our Mission'>
        <Text style={{margin: 10}}> 
            We present a curated databasof the best campsites in thvast woods and backcountry othe World Wide WeWilderness. We increasaccess to adventure for thpublic while promoting safand respectful use oresources. The experwilderness trekkers on oustaff personally verify eaccampsite to make sure thathey are up to our standardsWe also present a platforfor campers to share reviewon campsites they havvisited with each other.
            </Text>
        </Card>
        )
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        }; 
        return (
            <ScrollView>
                <Mission />
                    <Card title='Community Partners'>
                        <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                        />
                    </Card>
            </ScrollView>
        );
    }
}

export default About;