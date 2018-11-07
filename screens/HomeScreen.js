import { WebBrowser } from 'expo';
import React, { Component } from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';
import Colors from '../constants/Colors';

export class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Image
            // source={require('../assets/images/vehikl_logo-vert.png')}
            source={require('../assets/images/vehikl_london.png')}
            // source={require('../assets/images/vehikl_london.svg')}
            style={styles.welcomeImage}
          />
          <View style={styles.welcomeContainer} />

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Let's Test Your Knowledge</Text>
          </View>

          <View>
            <Text style={styles.quizText}>Question 1</Text>
            <Text style={styles.quizTextQuestion}>Where is Vehikl HQ</Text>
            <Button
              name={1.1}
              style={styles.quizButton}
              onPress={this.chooseAnswer}
              color={Colors.vehiklOrange}
              title="1. Guelph"
            />
            <Button
              name={1.2}
              style={styles.quizButton}
              onPress={this.chooseAnswer}
              color={Colors.vehiklOrange}
              title="2. Kitchener"
            />
            <Button
              name={1.3}
              style={styles.quizButton}
              onPress={this.chooseAnswer}
              color={Colors.vehiklOrange}
              title="3. Waterloo"
            />
            <Button
              id={1.4}
              style={styles.quizButton}
              onPress={this.chooseAnswer}
              color={Colors.vehiklOrange}
              title="4. Shrek's Swamp"
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  chooseAnswer = id => {
    console.log('NAME', id);
  };

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use
  //         useful development tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    // WebBrowser.openBrowserAsync(
    //   'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    // );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center'
  },
  quizButton: {
    padding: 16,
    backgroundColor: '#555555',
    color: '#555',
    fontWeight: '400',
    justifyContent: 'flex-start'
  },
  quizText: {
    fontSize: 28,
    marginHorizontal: 110,
    marginVertical: 30,
    fontWeight: '700',
    color: '#C0C0C0'
  },
  quizTextQuestion: {
    fontSize: 22,
    marginVertical: 6,
    marginHorizontal: 80,
    fontWeight: '700',
    color: '#555555'
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#555555',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: '100%',
    resizeMode: 'contain',
    top: 0
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});

function mapStateToProps(state) {
  return { characters: state.characters };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
