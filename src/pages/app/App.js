import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; //https://styled-components.com
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

const audio = new Audio(jutsoSound);

export function App() {
  // const isMounted = useRef(true);
  // const [quote, setQuote] = useState({
  //   speaker: 'Loading speaker...',
  //   quote: 'Loading Quote'
  // });

  // const onUpdate = async () => {
  //   const resQuote = await getQuote();

  //   if (isMounted.current) {
  //     setQuote(resQuote);
  //     audio.play();
  //   }
  // };

  // useEffect(() => {
  //   onUpdate();

  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({quote: 'loading quote...', speaker: 'loading speaker...'});

  //wait for a quote from the server
  const onUpdate = async () => {
    const quote = await getQuote();

    if(isMounted.current) {
      setQuoteState(quote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []); //will activate once the page loads

  return (
    <Content>
      {/* <Quotes {...quote} onUpdate={onUpdate} /> */}
      {/* spread syntax to map quote and speaker */}
      <Quotes {...quoteState} onUpdate={onUpdate} />        
      <NarutoImg alt="Naruto holding a kunai" src={narutoImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
