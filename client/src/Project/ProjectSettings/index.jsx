import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { FormCont, FormHeading, FormElement, ActionButton } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const { t } = useTranslation();
  const [{ isUpdating }, updateProject] = useApi.put('/project');

  return (
    <Form
      initialValues={Form.initialValues(project, get => ({
        name: get('name'),
        url: get('url'),
        category: get('category'),
        description: get('description'),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        url: Form.is.url(),
        category: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          await updateProject(values);
          await fetchProject();
          toast.success(t('project.success_changes'));
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs
            items={[t('project.projects'), project.name, t('project.project_details')]}
          />
          <FormHeading>{t('project.project_details')}</FormHeading>

          <Form.Field.Input name="name" label={t('project.name')} />
          <Form.Field.Input name="url" label={t('project.url')} />
          <Form.Field.TextEditor
            name="description"
            label={t('project.description')}
            tip={t('project.description_tip')}
          />
          <Form.Field.Select
            name="category"
            label={t('project.category')}
            options={categoryOptions}
          />

          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            {t('project.save_changes')}
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
