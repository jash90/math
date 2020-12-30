import Layout from '../components/Layout'
import { Form, Result, Text } from '../components/StyledComponents';
import Lvl from '../components/Lvl';
import { useCallback, useMemo, useState } from 'react'
import { generate } from '../mechanism/multiply';
import { GameLevel } from '../interfaces/enum';



const IndexPage = () => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(GameLevel.MID);

  const generateLvl = useCallback(() => generate(level), [level]);

  const [state, setState] = useState(generateLvl);

  const onKeyPress = useCallback(
    (e: any) => {
      if (e.key === 'Enter' && e.target.value !== "") {
        if (e.target.value == state.result) {
          setState(generateLvl);
          setPoints(points + 1);
          e.target.value = "";
          switch (points) {
            case GameLevel.MID: setLevel(GameLevel.MID); break;
            case GameLevel.HIGH: setLevel(GameLevel.HIGH); break;
          }
        } else {
          if (points < 50) setPoints(points - 1)
          if (points > 50 && points < 100) setPoints(points - 2)
          if (points > 100) setPoints(points - 5)
        }
      }
    }, []);

  const Level = useMemo(() => (<Lvl level={level} />), [level])

  return (
    <Layout title="Home | Next.js + TypeScript Example" >
      <h1>Siema uczniu</h1>
      <Form>
        <Text>{state.factor1}</Text>
        <Text>{"∙"}</Text>
        <Text>{state.factor2}</Text>
        <Text>{"="}</Text>
        <Result onKeyPress={onKeyPress} />
      </Form>
      <Form><Text>{"Punkty : " + points}</Text></Form>
      {Level}
    </Layout>
  );
}
export default IndexPage
