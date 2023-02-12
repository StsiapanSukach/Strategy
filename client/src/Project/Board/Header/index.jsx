import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/components';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = () => {
  const { t } = useTranslation();

  return (
    <Header>
      <BoardName>{t('sidebar.kanban_board')}</BoardName>
      <a
        href="https://github.com/StsiapanSukach/Strategy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button icon="github">{t('basic.github')}</Button>
      </a>
    </Header>
  );
};

export default ProjectBoardHeader;
