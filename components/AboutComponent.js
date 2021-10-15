import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

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

    static navigationOptions = {
        title: 'About'
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                        <Card
                        title='Community Partners'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <Mission />
                        <Card
                            title="Community Partners">
                            <Text>{this.props.partners.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    <Card
                        title="Community Partners">
                        <FlatList
                            data={this.props.partners.partners}
                            renderItem={renderPartner}
                            keyExtractor={item=>item.id.toString()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);