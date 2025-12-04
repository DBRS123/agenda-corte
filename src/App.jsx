import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  //Funções de tradução e controle de idioma
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //Função para lidar com pluralização
  const getCounterMessage = (count) => {
      // A função t() recebe a chave e um objeto de opções.
      // Se 'count' for fornecido, o i18next aplica a regra de pluralização
      // baseada no idioma atual.
      return t('counter_message', { count: count });
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/*Troca de Idioma*/}
      <div>
        <button onClick={() => changeLanguage('pt')} disabled={i18n.language === 'pt'}>
          Português (PT)
        </button>
        <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'} style={{ marginLeft: '10px' }}>
          English (EN)
        </button>
      </div>

      <hr />

      {/*Uso Simples da Tradução */}
      <h1>{t('app_title')}</h1>
      <p>{t('greeting_message')}</p>

      {/*Uso com Pluralização e Interpolação */}
      <button onClick={() => setCount(prev => prev + 1)}>
        {t('button_label')}
      </button>

      <p style={{ marginTop: '20px' }}>
        {getCounterMessage(count)}
      </p>

    </div>
  );
}

export default App;
