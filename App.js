import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.container}>
        <Image source={require('./assets/bkg.png')}  style={styles.backgroundImage}/>
    </View>
        <View style={styles.header}>
          <Text style={styles.title}>React Native Login Screen Tutorial</Text>
        </View>
          <Text style={styles.paragraph}>In this tutorial, we are going to explore the process of making a login screen in react native.
            Most modern apps login screen, will usually have a Logo image or text. Input texts for the email or username and password.
            A login Button to submit the authentication and complementary actions such as forgot password, and Signup.
          </Text>
          <Text style={styles.paragraph}>
            Our final result will look like this.
          </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample.png')} style={styles.pic} />
            </View>
            <Text style={styles.caption}>
              Let’s Get Started
            </Text>
            <Text style={styles.paragraph}>
              Let’s get started by creating a new react native project either using Expo or React Native CLI. With both approaches, you 
              will usually get a starting code like this.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample1.png')} style={styles.pic} />
            </View>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample2.png')} style={styles.picCodeBig} />
            </View>
            <Text style={styles.paragraph}>
              I will get started by removing the Text view inside our root view in the render Method.
            </Text>
            <Text style={styles.paragraph}>
              And add simple state properties to hold the email and password of from our UI
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample3.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              One this I will change on the root view container style is the background, everything
              else looks good.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample4.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              For the UI side let’s start by working on the Logo Text.
            </Text>
            <Text style={styles.paragraph}>
              It’s a simple TextView, you can also add an image there. Both options are perfect.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample5.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              Logo text style
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample6.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              For the textInput fields, I am going to make a view then add them inside, This way we can 
              have styling separate.
            </Text>
            <Text style={styles.paragraph}>
              And also room to add icons or indicators etc, I am not adding any for this tutorial for simplicity.
            </Text>
            <Text style={styles.paragraph}>
              Each input item will look like this.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample7.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.caption}>
              React native securetextentry for passwords
            </Text>
            <Text style={styles.paragraph}>
              For the Password textInput add the prop secureTextEntry to have the stars hiding the password instead of 
              plain text.
            </Text>
            <Text style={styles.paragraph}>
              Also, change the onChangeText property to save the text to password state property instead of email
            </Text>
            <Text style={styles.paragraph}>
              Add this style to the input view
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample8.png')} style={styles.picCodeMed} />
            </View>
            <Text style={styles.paragraph}>
              and the textInput style
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample9.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              Now lets add the Forgot password View,
            </Text>
            <Text style={styles.paragraph}>
              It’s a simple Text inside a button to have the press functionality, you cannot add bare text.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample10.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              Forgot text style
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample11.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              Same thing goes for the signup text. just changing the text size
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample12.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              And finally the Login Button.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample13.png')} style={styles.picCodeSmall} />
            </View>
            <Text style={styles.paragraph}>
              It’s style is a bit different and mostly centralized around the button.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample14.png')} style={styles.picCodeMed} />
            </View>
            <Text style={styles.paragraph}>
              Now out app looks like this.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample.png')} style={styles.pic} />
            </View>
            <Text style={styles.paragraph}>
              And there you have it a simple elegant React Native Login Screen tutorial.
            </Text>
            <Text style={styles.caption}>
              Happy Coding!
            </Text>

            
            
          <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2e9fb',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#14b598',
  },
  title: {
    fontFamily: 'Lucida Console',
    fontSize: 66,
    color: '#5c5157',
  },
  paragraph: {
    fontFamily: 'Lucida Console',
    fontSize: 20,
    color: '#ff4000',
    textAlign: 'justify',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  div: {
    alignItems: 'center'
  },
  pic: {
    height: 500,
    width: 500,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 30,
  },
  picCodeSmall: {
    height: 100,
    width: 450,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  picCodeMed: {
    height: 200,
    width: 450,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  picCodeBig: {
    height: 450,
    width: 450,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    
  },
  caption: {
    fontFamily: 'Impact, Charcoal, sans-serif',
    fontSize: 53,
    color: '#d3d62f',
    marginBottom: 5,
  },
  instruction: {
    fontFamily: 'Impact, Charcoal, sans-serif',
    fontSize: 25,
    color: '#00f',
    marginBottom: 5,
  },
  code: {
    fontFamily: 'Impact, Charcoal, sans-serif',
    fontSize: 20,
    color: '#00f',
    backgroundColor: '#DCDCDC',
  },
});
