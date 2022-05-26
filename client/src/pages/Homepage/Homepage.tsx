import React from 'react';
import style from './Homepage.module.scss';
import TextField from '@mui/material/TextField';

const Homepage = () => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.searchBar}>
          <TextField
            fullWidth
            id="standard-basic"
            label="What are you searching for?"
            variant="standard"
          />
        </div>
        <div className={style.contents}>
          <div className={style.items}>
            <div className={style.card}>
              h
            </div>
            <div className={style.card}>
              <div className={style.addIcon}>
                <i className='feather-plus'/>
              </div>
              <div className={style.addItemTxt}>
                Add Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage