import { Link } from 'react-router-dom';
import CardNews from '../components/CardNews';
import { Divcontainer, DivCardnews } from '../components/styles/FavoriteStyled';
import { AiTwotoneHome } from 'react-icons/ai';

function Favorite() {
  return (
    <div>
      <Divcontainer>
       <Link to='/'>
          <AiTwotoneHome /> Home
        </Link> 
      </Divcontainer>
      <DivCardnews>
        <CardNews/>
      </DivCardnews>
    </div>
  );
}

export default Favorite;
