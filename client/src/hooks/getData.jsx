import { useState } from 'react';
import axios from 'axios';

export const getData = (url,updater) => {
    axios
   .get(url)
   .then(res => {
     console.log(res.data);
     updater(res.data)
   })
   .catch(err => {
     console.error(err);
   })
}