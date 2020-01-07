import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { GraduationCap as Icon } from 'styled-icons/fa-solid/GraduationCap';

import Bg from '../src/assets/specialization-card-bg.jpg';

import IntroCard from '../src/components/IntroCard';
import ListIntroCard from '../src/components/ListIntroCard';

storiesOf('Intro Card', module)
  .add('Default', () => {
    const description =
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it";

    const Wrapper = styled.div`
      height: 40rem;
      width: 42rem;
    `;
    return (
      <Wrapper>
        <IntroCard
          bg={Bg}
          slug="#"
          description={description}
          title="Lorem Ipsum"
          icon={<Icon />}
        />
      </Wrapper>
    );
  })
  .add('List', () => {
    const description =
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it";
    const entry = {
      bg: Bg,
      slug: '#',
      description,
      title: 'Lorem Ipsum',
      icon: <Icon />,
    };
    const entries = [entry, entry, entry];
    return <ListIntroCard entries={entries} />;
  });
