import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
    state = {
        search: 'Indonesia',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={styles.SearchBar}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: '#FFFFFF'
    }
});
