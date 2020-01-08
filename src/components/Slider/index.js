import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Media } from '../../utils';

import * as C from './content';
import * as S from './styled';

function Slider({ slides }) {
  const [state, setState] = useState({ activeSlides: [] });

  useEffect(() => {
    const itemsPerPage = Media.getScreenSize() === 'sm' ? 1 : 2;
    const totalPages = Math.floor(slides.length / itemsPerPage);

    setState(prev => ({
      ...prev,
      itemsPerPage,
      page: { active: 1, total: totalPages },
      activeSlides: [...slides.slice(0, itemsPerPage).map(each => each.key)],
    }));
  }, []);

  function changeSlide(newPage) {
    const end = newPage * state.itemsPerPage;
    const begin = end - state.itemsPerPage;
    const activeSlides = [...slides.slice(begin, end).map(each => each.key)];

    return setState(prev => ({
      ...prev,
      page: { ...prev.page, active: newPage },
      activeSlides,
    }));
  }

  function onNextHandler() {
    const page =
      state.page.active === state.page.total ? 1 : state.page.active + 1;

    return changeSlide(page);
  }

  function onPrevHandler() {
    const page =
      state.page.active === 1 ? state.page.total : state.page.active - 1;

    return changeSlide(page);
  }

  return (
    <S.SliderWrapper>
      <S.Slide>
        {slides.length > 0
          ? slides.map(each => (
              <S.SlideItem
                className={
                  state.activeSlides.includes(each.key) ? '--visible' : ''
                }
                key={each.key}
                src={each.url}
                alt={each.label}
                title={each.label}
              />
            ))
          : null}
      </S.Slide>
      <S.SliderControls>
        <S.SliderControlGroup>
          {state.page
            ? Array(state.page.total)
                .fill(0)
                .map((_, i) => (
                  <S.SliderControlDot
                    type="button"
                    key={i}
                    alt={`Slide ${i + 1}`}
                    title={`Slide ${i + 1}`}
                    onClick={() => changeSlide(i + 1)}
                    className={state.page.active === i + 1 ? '--active' : ''}
                  />
                ))
            : null}
        </S.SliderControlGroup>
        <S.SliderControlGroup>
          <S.SliderControlButton
            type="button"
            alt="Anterior"
            title="Anterior"
            onClick={onPrevHandler}
          >
            <C.icons.Prev size={24} />
          </S.SliderControlButton>
          <S.SliderControlButton
            type="button"
            alt="Próximo"
            title="Próximo"
            onClick={onNextHandler}
          >
            <C.icons.Next size={24} />
          </S.SliderControlButton>
        </S.SliderControlGroup>
      </S.SliderControls>
    </S.SliderWrapper>
  );
}

Slider.defaultProps = { slides: C.slides };
Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ),
};

export default Slider;
