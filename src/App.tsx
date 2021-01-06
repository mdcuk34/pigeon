import React from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native';
import {RootState, useAppDispatch, increment, decrement} from './redux';
import {api} from './api';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.count);
  const {data, error, isLoading} = api.useGetChargesQuery({});
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Pigeon</Text>
        <Text style={styles.body}>Count: {count}</Text>
        <Button title="+" onPress={() => dispatch(increment({quantity: 1}))} />
        <Button title="-" onPress={() => dispatch(decrement({quantity: 1}))} />
        {isLoading && <ActivityIndicator />}
        {error && <Text>ERROR</Text>}
        {data && data.data.map((i) => <Text key={i.id}>{i.description}</Text>)}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  body: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default App;
