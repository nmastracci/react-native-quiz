import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

class QuizContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.Actions.getQuestions();
  }

  items({ item, index }) {
    return (
      <View>
        <Button
          id={1.4}
          style={styles.quizButton}
          onPress={this.chooseAnswer}
          color={Colors.vehiklOrange}
          title={item.text}
        />
      </View>
    );
  }

  render() {
    let { questions } = this.props;

    console.log('questions: ', questions);

    return (
      <View style={styles.container}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.questions}
          renderItem={this.items}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }

  // handleSelect(id) {
  //   let { characters, Actions } = this.props;
  //   Actions.select(characters.items[id]);
  // }
  // handleSkip(id) {
  //   let { characters, Actions } = this.props;
  //   Actions.skip(characters.items[id]);
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return { questions: state.questions };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);
