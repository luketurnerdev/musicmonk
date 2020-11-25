import React, {useState} from 'react';
import {Button, Grid} from '@material-ui/core/'

const ChordGenerator = () => {
  const [key, setKey] = useState('B');
  const [voicing, setVoicing] = useState('Major');
  const getRandom = arr => [Math.floor(Math.random() * Math.floor(arr.length))]
  const generateChord = () => {
      setKey(keys[getRandom(keys)])
      setVoicing(voicings[getRandom(voicings)])
  }


  const keys = ["A","B","C","D","E","F","G"];
  const voicings = ['Major 7', 'Minor 7', 'Dominant 7'];
  return (
    <>
    <h1>Chord Gen</h1>
    <div>
      <Grid container>
        <Grid item xs={6}>
          <h5>{key}</h5>
        </Grid>
        <Grid item xs={6}>
          <h5>{voicing}</h5>
        </Grid>
      </Grid>
    </div>
    <Button onClick={generateChord}>
      Click me bro
    </Button>

</>
  )
}


export default ChordGenerator;