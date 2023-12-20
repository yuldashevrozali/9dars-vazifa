import './App.css'
import { useTranslation } from 'react-i18next';
import { LangContext } from './contexts/langcontext';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [lang, setLang] = useState('')

  const { t } = useTranslation();

  function handlechangelang(e) {
    setLang(e.target.value)
  }
  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>

        <div className="block">
          <div className="select">
            <select onChange={handlechangelang}>
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>

            </select>
          </div>
          <div className="header">
            <div className="header-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="6" fill="#13390D" />
                <path d="M9.70947 21.6781C9.15719 21.6781 8.70947 21.2304 8.70947 20.6781V9.22583C8.70947 8.67355 9.15719 8.22583 9.70947 8.22583H10.7611C11.3134 8.22583 11.7611 8.67355 11.7611 9.22583V20.6781C11.7611 21.2304 11.3134 21.6781 10.7611 21.6781H9.70947ZM12.7492 15.4557C12.67 15.2417 12.6664 15.007 12.739 14.7906L14.7137 8.90761C14.8505 8.50029 15.2321 8.22583 15.6618 8.22583H16.5646C17.2468 8.22583 17.7288 8.89397 17.5135 9.54137L15.7666 14.7949C15.6955 15.0086 15.6987 15.2401 15.7756 15.4519L17.5502 20.3367C17.7871 20.9888 17.3041 21.6781 16.6103 21.6781H15.7471C15.3286 21.6781 14.9544 21.4175 14.8092 21.0251L12.7492 15.4557Z" fill="white" />
                <path d="M19.0114 20.3329C19.0114 19.7564 19.2928 19.3272 19.8555 19.0453C20.1008 18.93 20.3605 18.8724 20.6347 18.8724C21.2839 18.8724 21.7601 19.1222 22.0631 19.6219C22.1929 19.8396 22.2579 20.0767 22.2579 20.3329C22.2579 20.9222 21.9693 21.345 21.3921 21.6013C21.1469 21.7166 20.8944 21.7742 20.6347 21.7742C19.9709 21.7742 19.4948 21.518 19.2062 21.0055C19.0764 20.7877 19.0114 20.5635 19.0114 20.3329Z" fill="white" />
              </svg>
              <p>Kreed</p>
            </div>
            <div className="menu">
              <ul>
                <li>{t('home', { lng: lang })}</li>
                <li>{t('us', { lng: lang })}</li>
                <li>{t('Locations', { lng: lang })}</li>
                <li>{t('FAQs', { lng: lang })}</li>
              </ul>
              <Button btn={t('button', { lng: lang })} />
            </div>
          </div>

          <div className="hero">
            <div className="hero-left">
              <h1>{t('text', { lng: lang })}</h1>
              <p>{t('info', { lng: lang })}</p>
              <div className="btn1">
                <Button btn={t('btn', { lng: lang })} />
              </div>
            </div>

          </div>
        </div>


      </LangContext.Provider>

    </>
  )
}

export default App
