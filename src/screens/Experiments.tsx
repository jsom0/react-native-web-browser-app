import React, {memo} from 'react';
import {View, Text} from 'react-native';

const Experiments = ({webView}) => {
  console.log('========This is Experiment=======');
  return <>{webView}</>;
};

export default memo(Experiments);
