import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {createUseStyles} from 'react-jss';
import Text from '../components/Text';
import Matches from '../components/Matches';
import { Select } from 'evergreen-ui'
import React, {useState, ChangeEvent} from 'react';


const useStyles = createUseStyles({
  container: {
    backgroundImage: `url("notw_wallpaper_1.jpeg")`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 100
  },
  text: {
    color: '#FFFFFF'
  }

})

const Home: NextPage = () => {
  const classes = useStyles();
  const title = "abcdef";

  const [selectedBook, setSelectedBook] = useState("notw.json")
  const bookChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    setSelectedBook(e.target.value);
  }

  console.log(selectedBook)

  return (
    <div className={classes.container}>
      <Text size={35} weight={600}>This Is Slightly Better Than a Scriv</Text>
      <Text>Use this tool to search for paragraphs related to a certain word in Name of the Wind. The "buffer paragraphs" will grab x paragraphs before & after where the word is for context. It's basically a fancy ctrl+f</Text>
      <Text size={20}>Choose a book:</Text>
      <Select width={240} value={selectedBook} onChange={bookChangeHandler}>
        <option value="notw.json">
          Name of the Wind
        </option>
        <option value="wmf.json">
          Wise Man's Fear
        </option>
      </Select>


       
        <input type="text" id="search_word" placeholder="Search Word" />
        <input type="number" id="buffer_paragraphs" placeholder="Buffer Paragraphs" />
        <button id = "search_button"> Search!</button>  
        <Matches book={selectedBook} searchString={"alphabet"} buffer={1} />
        <div id="book_text_div"></div>
        </div>
  )
}

export default Home
