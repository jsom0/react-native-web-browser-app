import React, {memo} from 'react';
import {View, Text} from 'react-native';

const About = ({webView}) => {
  console.log('========This is About=======');
  return <>{webView}</>;
};

export default memo(About);
