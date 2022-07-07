import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button';

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return(
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Quote no Jutsu</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string, 
  speaker: string,
  onUpdate: func,
};

const Wrapper = styled.div`
  flex: 1; //grows 1 unit from other elements
  display: flex;
  flex-direction: column;
  
`;

const Quote = styled.p`
  font-size: 1.5em;
  margin: 0;
  padding: 10px;
  background-color: rgba(220, 135, 44, 0.7);
  border: 2px solid #000;
  border-radius: 5px;
  text-align: justify;
`;

const Speaker = styled.p` //using properties from Quote 
  text-align: right;
  margin: 10px 0 50px;
  font-size: 2em;
`;


// export const Quotes = ({ quote, speaker, onUpdate = () => {} }) => {
//   return (
//     <Wrapper>
//       <Quote>"{quote}"</Quote>
//       <Speaker>- {speaker}</Speaker>
//       <Button onClick={onUpdate}>Quote No Jutsu</Button>
//     </Wrapper>
//   );
// };

// Quotes.propTypes = {
//   quote: string,
//   speaker: string,
//   onUpdate: func
// };

// const Wrapper = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Quote = styled.p`
//   font-size: 2em;
//   text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
//   flex: 1;
//   margin: 0;
// `;

// const Speaker = styled(Quote)`
//   text-align: right;
//   width: 100%;
//   margin-bottom: 50px;
// `;
