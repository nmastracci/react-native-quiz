import { ExpoConfigView } from '@expo/samples';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText}>SETTINGS</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Loves Gary</Text>
            <Switch
              tintColor={Colors.vehiklOrange}
              style={styles.settingSwitches}
              value={true}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Cheat Mode</Text>
            <Switch
              tintColor={Colors.vehiklOrange}
              style={styles.settingSwitches}
              value={false}
            />
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingText}>Orange Everything</Text>
            <Switch
              trackColor={{ false: Colors.vehiklOrange }}
              style={styles.settingSwitches}
              value={false}
            />
          </View>
        </ScrollView>
        <ExpoConfigView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 15,
    backgroundColor: '#fff'
  },
  headerText: {
    fontSize: 30,
    marginHorizontal: 110,
    marginVertical: 30,
    fontWeight: '900',
    color: '#C0C0C0'
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35
  },
  settingText: {
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: '300',
    color: '#555555',
    margin: 15
  },
  settingSwitches: {
    alignItems: 'flex-end',
    margin: 15
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 300,
    // height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
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
