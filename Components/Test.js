import React from 'react'
import { StyleSheet, View , Animated} from 'react-native'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      topPosition : new Animated.Value(0)
    }
  }

  componentDidMount(){
    Animated.spring(
      this.state.topPosition,
      {
        toValue: 100,
        speed: 4,
        bounciness:40
      }
    ).start()
  }
  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View  style={[ styles.animation_view, {top: this.state.topPosition} ]}>
        
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})

export default Test


/*
// Components/Test.js

import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import  HelloWorld  from './HelloWorld';


class Test extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
            <HelloWorld />
       
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    height: Platform.OS === 'ios' ? 100 : 50,
    width: Platform.OS === 'ios' ? 50 : 100
}
})

export default Test*/