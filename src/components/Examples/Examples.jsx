import { useState } from 'react';
import Section from '../Section/Section.jsx';
import Tabs from "../Tabs/Tabs.jsx";
import TabButton from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';

export default function Examples(){

  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please, select a topic.</p>;
  
  if(selectedTopic){
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
    )
  }

  let buttons = (
    <>
      <TabButton isSelected={tabContent === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={tabContent === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={tabContent === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={tabContent === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
    </>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu" buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}