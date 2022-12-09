import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default App;