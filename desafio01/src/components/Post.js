import React from 'react';
import PropTypes from 'prop-types';
import shorthand from 'react-native-styles-shorthand';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create(shorthand({
  cardContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,

    shadowOpacity: 0.30,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#333333',
    margin: '0 0 5 0',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#999999',
    margin: '0 0 5 0',
  },
  cardContent: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
  },
}));

const Post = ({ title, content, author }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>
      {title}
    </Text>

    <Text style={styles.cardSubtitle}>
      { author }
    </Text>

    {/* Heading line */}
    <View style={{borderBottomColor: '#EEEEEE', borderBottomWidth: 1, marginBottom: 5}}/>

    <Text style={styles.cardContent}>
      {content}
    </Text>
  </View>
);

Post.defaultProps = {
  title: '',
  content: '',
  author: '',
};

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default Post;
