import React from 'react';
import '../stylesheets/Design.scss';
import PaletteRadio from './PaletteRadio.js';

const Design = (props) => {
  return (
    <div className='design'>
      <p className='design__content'>Colores</p>
      <form action='' className='design__form'>
        <PaletteRadio id='1' value='1' primaryColor='design__paleta__1' secondaryColor='design__paleta__2' tertiaryColor='design__paleta__3' handlePalette={props.handlePalette} pal={props.properties} />

        <PaletteRadio id='2' value='2' primaryColor='design__paleta__4' secondaryColor='design__paleta__5' tertiaryColor='design__paleta__6' handlePalette={props.handlePalette} pal={props.properties} />

        <PaletteRadio id='3' value='3' primaryColor='design__paleta__7' secondaryColor='design__paleta__8' tertiaryColor='design__paleta__9' handlePalette={props.handlePalette} pal={props.properties} />
      </form>
    </div>
  );
};

export default Design;
