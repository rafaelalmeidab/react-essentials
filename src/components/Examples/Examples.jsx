import { useState } from 'react';
import Section from '../Section/Section.jsx';
import TabButton from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';

export default function Examples(){

  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton){
    setTabContent(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton isSelected={tabContent === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={tabContent === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={tabContent === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={tabContent === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
      </menu>
      { !tabContent ? <p>Please, select a topic.</p> : 
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
      }
    </Section>
  );
}