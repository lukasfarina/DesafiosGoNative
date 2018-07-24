/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import shorthand from 'react-native-styles-shorthand';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Card from 'components/Post';

const styles = StyleSheet.create(shorthand({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  container: {
    padding: '20 20 0 20',
  },
  header: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    shadowOpacity: 0.30,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#373737',
  },
}));


export default class App extends Component {
  state = {
    cards: [
      {
        key: 0,
        title: 'Aprendendo React Native',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'Lucas Farina',
      },
      {
        key: 1,
        title: 'Aprendendo React Native',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'Lucas Farina',
      },
      {
        key: 2,
        title: 'Aprendendo React Native',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        author: 'Lucas Farina',
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            GoNative App
          </Text>
        </View>

        <ScrollView style={styles.container}>
          {this.state.cards.map(card => <Card key={card.key} content={card.content} author={card.author} title={card.title} />)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
