import React from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorPage, ErrorPageInner, ErrorBox, StyledIcon, Title } from './Styles';

const PageError = () => {
  const { t } = useTranslation();

  return (
    <ErrorPage>
      <ErrorPageInner>
        <ErrorBox>
          <StyledIcon type="bug" />
          <Title>{t('error')}</Title>
          <p>
            {t('error_description')}{' '}
            <a href="https://support.atlassian.com/jira-software-cloud/">{t('help_center')}</a>
          </p>
        </ErrorBox>
      </ErrorPageInner>
    </ErrorPage>
  );
};

export default PageError;
