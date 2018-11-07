import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PEOPLE } from '../constants/People';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/bradley.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileTextTitle}>{PEOPLE.name}</Text>
        <Text style={styles.profileText}>High Score: {PEOPLE.highScore}</Text>
        <Text style={styles.profileText}>
          Playing Since: {PEOPLE.createdOn}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  profileImage: {
    borderRadius: 75
  },
  profileTextTitle: {
    fontSize: 50,
    fontWeight: '900',
    marginTop: 20
  },
  profileText: {
    fontSize: 25,
    fontWeight: '300',
    marginTop: 20,
    color: '#555555'
  }
});
