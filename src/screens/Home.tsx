import React, {memo} from 'react';
import {View, Text} from 'react-native';

const Home = ({webView}) => {
  console.log('========This is Home=======');
  return <>{webView}</>;
};

export default memo(Home);
