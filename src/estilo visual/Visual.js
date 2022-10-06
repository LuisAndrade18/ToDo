import React from 'react'
import * as S from '../Styled/StyledVisual'
import Logo from '../marketing/logo.png'
import Alvo from '../marketing/alvo.png'
import Conect from '../marketing/conexão.png'
import Placa from '../marketing/placa.png'

const Visual = () => {
  return (
    <div>
      <S.Logo src={Logo} alt="" />
      <S.Alvo src={Alvo} alt="" />
      <S.Conect src={Conect} alt="" />
      <S.Placa src={Placa} alt="" />
    </div>
  );
}
export default Visual