import Layout from '../components/Layout'
import { Form, Result, Text } from '../components/StyledComponents';
import Lvl from '../components/Lvl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { generate } from '../mechanism/multiply';
import { GameLevel } from '../interfaces/enum';



const IndexPage = () => {
  const input: any = useRef();
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(GameLevel.VERY_HIGH);
  const [attempt, setAttempt] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const generateLvl = useCallback(() => generate(level), [level]);

  const [state, setState] = useState(generateLvl);

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter' && e.target.value !== "") {
      setAttempt(attempt + 1)
      if (e.target.value == state.result) {
        setState(generateLvl);
        setPoints(points + 1);
        e.target.value = "";
      } else {
        if (points < 50) setPoints(points - 1)
        if (points > 50 && points < 100) setPoints(points - 2)
        if (points > 100) setPoints(points - 5)
        setIncorrect(incorrect + 1)
      }
      if (points > 50 && points < 100) setLevel(GameLevel.MID);
      if (points > 100 && points < 150) setLevel(GameLevel.HIGH);
      if (points > 150) setLevel(GameLevel.HIGH);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (level == GameLevel.VERY_HIGH) {
        setAttempt(attempt + 1)
        if (input?.current?.value) input.current.value = "";
        if (input?.current?.value != state.result) {
          if (points < 50) setPoints(points - 1)
          if (points > 50 && points < 100) setPoints(points - 2)
          if (points > 100) setPoints(points - 5)
          setIncorrect(incorrect + 1)
          setState(generateLvl);
        } else {
          setState(generateLvl);
          setPoints(points + 1);
          switch (points) {
            case 50: setLevel(GameLevel.MID); break;
            case 100: setLevel(GameLevel.HIGH); break;
          }
        }

      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [state]);

  const Level = useMemo(() => (<Lvl level={level} />), [level])

  return (
    <Layout title="Home | Next.js + TypeScript Example" >
      <h1>Siema uczniu</h1>
      <Form>
        <Text>{state.factor1}</Text>
        <Text>{"∙"}</Text>
        <Text>{state.factor2}</Text>
        <Text>{"="}</Text>
        <Result ref={input} onKeyPress={onKeyPress} />
      </Form>
      <Form column>
        <Text>{"Punkty : " + points}</Text>
        <Text>{"Prawidłowe : " + (attempt - incorrect)}</Text>
        <Text>{"Nieprawidłowe : " + incorrect}</Text>
        <Text>{"Próby : " + attempt}</Text>
        {Level}
      </Form>

    </Layout>
  );
}
export default IndexPage
