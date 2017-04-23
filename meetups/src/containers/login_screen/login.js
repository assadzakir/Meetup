import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../constants/colors';
import styled from 'styled-components/native';
import styles from './style';



const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

const MeetupText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

class LoginScreen extends Component {
    render() {
        return (
            <FlexContainer>
                <FlexContainer>
                    <Text style={styles.authTitle}>Appointment Mode</Text>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeTitle}>Welcome!</Text>
                        </FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeText}>
                                Start managing your
                {' '}
                                <MeetupText>Appointment</MeetupText>
                                {' '}
                                quickly and efficently
              </Text>
                        </FlexContainer>
                    </FlexContainer>
                    <BottomButtonWrapper>
                        <Button
                            color="#db3236"
                        >
                            <Text style={styles.buttonAuth}>Sign with Google</Text>
                        </Button>
                        <Button
                            color="#3b5998">
                            <Text style={styles.buttonAuth}>Sign with Facebook</Text>
                        </Button>
                    </BottomButtonWrapper>
                </FlexContainer>
            </FlexContainer>
        );
    }
}

export default LoginScreen;