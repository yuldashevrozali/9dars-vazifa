import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { LangContext } from '../contexts/langcontext';

export default function Button(props) {
  let langContext = useContext(LangContext);
//   const { t  } = useTranslation();
  const { btn, id  } = props
  return (
    <div>
      <button className={ id }>{ btn }</button>
    </div>
  )
}