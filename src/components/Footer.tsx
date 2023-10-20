import { FooterStyle } from './styles/FooterStyled';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <FooterStyle>
      <div>
        <p>Declaração de direitos autorais para o conteúdo do site</p>
        <a href="https://agenciadenoticias.ibge.gov.br">https://agenciadenoticias.ibge.gov.br</a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.servicodados.ibge.gov.br"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://twitter.com/share?url=http%3A%2F%2Fwww.servicodados.ibge.gov.br"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fwww.servicodados.ibge.gov.br"
          target="_blank"
        >
        <FaTwitterSquare />
        </a>
      </div>      
    </FooterStyle>
  );
}

export default Footer;
