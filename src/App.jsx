import React from 'react';
import Button from './components/Button';
import Input from './components/Input'
import useCounter from './hooks/useCounter';
import styles from './components/Button.module.css'

const App = () => {
   const { value, addValue, delValue, amountPlus, amountRemove } = useCounter()
   
   return <div id='container'>
      <Input type="number" name="number" id="number" val={value} />
      <div>
         <Button buttonName="Plus" style={`${styles.button} ${styles.plus}`} onClick={() => addValue()} />
         <Button buttonName="Minus" style={`${styles.button} ${styles.minus}`} onClick={() => delValue()} />
         <Button buttonName="Add 5" style={`${styles.button} ${styles.del5}`} onClick={() => amountPlus(5)} />
         <Button buttonName="Del 5" style={`${styles.button} ${styles.add5}`} onClick={() => amountRemove(5)} />
      </div>
   </div>
}

export default App;
