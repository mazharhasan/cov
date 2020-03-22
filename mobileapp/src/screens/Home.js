import React, { Component } from "react";
import {FlatList, View, ScrollView, Text, ActivityIndicator, TouchableOpacity,
  Alert, Image, Dimensions, AsyncStorage} from 'react-native';
  import MainHeader from '../Component/MainHeader';
import {colors} from './../Component/index.style';
var {height, width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome';
import { showMessage, hideMessage } from "react-native-flash-message";
import Modal from "react-native-modal";
import Form1 from './Forms/Form1';

const allSteps = [
  { name: "step 1", component: Form1 },
  // { name: "step 2", component: Step2 },
  // { name: "step 3", component: Step3 },
  // { name: "step 4", component: Step4 }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {ques: 'Have you travelled from Mainland China/Iran/South Korea/ Italy /other high burden country of COVID-19 infection in the last 14 days?'+
        '\n\nOR\n\n'+
        'Have you had close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
          options: [
            {name: 'Yes', icon: null, score: 2, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        },
        {ques: 'Have you had close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
        '\n\nOR\n\n'+
        'Are you currently living with a probable or confirmed case of Corona since last 14 days?',
          options: [
            {name: 'Yes', icon: null, score: 2, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        },
        {ques: 'Did you develop fever after arrival from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?'+
        '\n\nOR\n\n'+
        'Did you develop fever after close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
          options: [
            {name: 'Yes', icon: null, score: 1, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        },
        {ques: 'Did you develop a fever after close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
        '\n\nOR\n\n'+
        'Did you develop a fever while living with a probable or confirmed case of COVID-19 ?',
          options: [
            {name: 'Yes', icon: null, score: 1, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        },
        {ques: 'Did you develop cough / cold / sore throat / shortness of breath after arrival from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?'+
        '\n\nOR\n\n'+
        'Did you develop cough / cold / sore throat / shortness of breath after close contact with any person, who has returned from Mainland China/Iran/South Korea/ Italy / other high burden country of COVID-19 infection in the last 14 days?',
          options: [
            {name: 'Yes', icon: null, score: 1, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        },
        {ques: 'Did you develop cough / cold / sore throat / shortness of breath after close contact with a probable or confirmed case of COVID-19 in last 14 days?'+
        '\n\nOR\n\n'+
        'Did you develop cough / cold / sore throat / shortness of breath while living with a probable or confirmed case of COVID-19 in last 14 days?',
          options: [
            {name: 'Yes', icon: null, score: 1, color: 'red'},
            {name: 'No', icon: null, score: 0, color: 'green'},
          ],
          selectedOption: null
        }
      ],
      apiLoading:true,
      refresh: true,
      questionNo: 0,
      scores: [],
      visibleModal: null,
      final_score: 0
    };
    this.props.navigation.addListener('willFocus', this.componentWillFocus)
  }

  componentWillFocus = () => {
    console.log("Survey FOCUSED.")
    AsyncStorage.setItem('drawerKey','Survey')
    this.setState({scores: [], final_score: 0})
  }

  _renderOptions = ({item, index}) => (
    <TouchableOpacity
    onPress={async () => {
      await (this.state.questions[this.state.questionNo].selectedOption = item.name);
      this.state.scores[this.state.questionNo] = item.score;
      this.setState({refresh: !this.state.refresh})
      if((this.state.questions.length-1) > this.state.questionNo){
        this.setState({questionNo: this.state.questionNo+1})
      }
      // console.log(this.state.questions[this.state.questionNo])
      }}
    style={{borderColor:item.color,borderWidth:1,flexDirection: 'column', alignItems: 'center', height: 40, justifyContent: 'center', width: 100, borderRadius: 20,
    backgroundColor: (this.state.questions[this.state.questionNo].selectedOption === item.name)? item.color:colors.white,
    }}>
      {item.icon && <Image source={item.icon} style={{
        width: (this.state.questions[this.state.questionNo].selectedOption === item.name)?65:50,
        height: (this.state.questions[this.state.questionNo].selectedOption === item.name)?65:50
        }} />}
      <Text adjustsFontSizeToFit={true} numberOfLines={2} style={{width: width/this.state.questions[this.state.questionNo].options.length , textAlign: 'center',
        fontSize: (this.state.questions[this.state.questionNo].selectedOption === item.name)?22:18,
        color: (this.state.questions[this.state.questionNo].selectedOption === item.name)? colors.white:item.color}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  _renderQPagi = ({item, index}) => (
    <View
    style={{width: width/(this.state.questions.length+1), height: 16, borderRadius: 8, borderWidth: 1,
      borderColor: '#4195d1', backgroundColor: (index <= this.state.questionNo)?'#4195d1':'white'}}>
    </View>
  );

  fillingSurvey = () => {
    // if(this.state.scores.length == this.state.questionNo){
    //   console.log('Select option first');
    //   showMessage({
    //     message: "Please select an option first.",
    //     description: "",
    //     type: "info",
    //   });
    //   return ;
    // }
    // if((this.state.questions.length-1) > this.state.questionNo){
    //   this.setState({questionNo: this.state.questionNo+1})
    // }else {
      let final_score = 0
      if(this.state.scores[0]+this.state.scores[1]>1){ final_score = final_score + 2 }
      if(this.state.scores[2]+this.state.scores[3]>0){ final_score = final_score + 1 }
      if(this.state.scores[4]+this.state.scores[5]>0){ final_score = final_score + 1 }
      this.setState({final_score: final_score, visibleModal: 'covoidScoreModal'})
      console.log('User wants to submit survey. ', final_score)
    // }
  }

  render() {
    return (
      <View style={{flex: 1, }}>
             <MainHeader navigation={this.props.navigation} />
        <ScrollView keyboardShouldPersistTaps={'handled'} style={{height: '60%'}}>

          <FlatList
            horizontal={true}
            style={{margin: 20}}
            contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
            data={this.state.questions}
            extraData={this.state.questionNo}
            keyExtractor={(item, index) => item + index}
            renderItem={this._renderQPagi}
          />

          <Text style={{textAlign: 'center', fontSize: 18, color: colors.Textlight, padding: 10}}>
          {'Question '+(this.state.questionNo+1)}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 18, color: colors.Textlight, padding: 10}}>
          {this.state.questions[this.state.questionNo].ques}
          </Text>

        </ScrollView>

        <FlatList
          horizontal={true}
          style={{}}
          contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}
          data={this.state.questions[this.state.questionNo].options}
          extraData={this.state.refresh}
          keyExtractor={(item, index) => item + index}
          renderItem={this._renderOptions}
        />

        {this.state.questionNo?
        (<TouchableOpacity onPress={()=> {if(this.state.questionNo){this.setState({questionNo: this.state.questionNo-1})}}}
        style={{width: '35%', backgroundColor: colors.white, borderColor: colors.BGprimary,
        borderWidth: 1, marginBottom: 10, marginRight: 10, alignSelf: 'flex-end', borderRadius: 25}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Icon name="step-backward" size={20} color={colors.BGprimary} />
            <Text style={{fontSize: 18, color: colors.Textprimary, padding: 5}}>
            Previous
            </Text>
          </View>
        </TouchableOpacity>)
          :
        <View />}

        { this.state.questions.length == this.state.scores.length &&
        <TouchableOpacity onPress={this.fillingSurvey}
          style={{backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
                  borderColor: colors.BGprimary, borderTopWidth: 2}}>
          <Text style={{fontSize: 18, color: colors.Textprimary, paddingVertical: 12}}>
            {'Calculate Score'}
          </Text>
        </TouchableOpacity>}

        <Modal
          isVisible={this.state.visibleModal === 'covoidScoreModal'}
          onBackButtonPress={() => this.setState({visibleModal: null})}
          onBackdropPress={() => this.setState({visibleModal: null})}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          >
          <View style={{padding: 10, flexDirection: 'column', backgroundColor: 'white'}}>
            <Text style={{color: '#073761', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>Your Score: -</Text>

            <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 10, width: 80, height: 80, borderRadius: 40,
            backgroundColor: this.state.final_score < 3?'green':(this.state.final_score < 4?'yellow':'red')}}>
              <Text style={{fontSize: 30, color: 'white'}}>
                {this.state.final_score}
              </Text>
            </View>

            <Text style={{fontSize: 16, color: '#073761', margin: 10}}>
              {this.state.final_score < 3?'No Chance for development of COVID -19 disease':
                (this.state.final_score < 4?'Low probability of COVID -19':
                'Moderate to High probability of COVID -19')
              }
            </Text>

            <TouchableOpacity
              style={{backgroundColor: '#073761', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30}}
              onPress={() => {this.setState({visibleModal: null});}}>
              <Text style={{color: 'white', fontSize: 18, paddingVertical: 5}}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}