import React from 'react';

import { Section, SectionText, SectionTitle } from '../Style/GlobalComponents';
import Button from '../Style/GlobalComponents/Button';
import { LeftSection } from './CubeHero';

export const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);


