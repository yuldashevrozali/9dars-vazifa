import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { LangContext } from '../contexts/langcontext';

export default function Card() {
  let langContext = useContext(LangContext);
  console.log(langContext);
  const { t,  } = useTranslation();
  return (
    <div>
      <h3>{t('bye',{ lng: langContext.lang} )}</h3>
    </div>
  )
}
