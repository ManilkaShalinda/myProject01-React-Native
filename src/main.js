import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.bodyText}>Hello World!</Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
  },
});

export default App;
