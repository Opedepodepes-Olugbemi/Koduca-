import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import {
  update,
  fetch,
} from '../../stores/discussion_boards/discussion_boardsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditDiscussion_boards = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    course: '',

    posts: [],

    organization: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { discussion_boards } = useAppSelector(
    (state) => state.discussion_boards,
  );

  const { currentUser } = useAppSelector((state) => state.auth);

  const { discussion_boardsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: discussion_boardsId }));
  }, [discussion_boardsId]);

  useEffect(() => {
    if (typeof discussion_boards === 'object') {
      setInitialValues(discussion_boards);
    }
  }, [discussion_boards]);

  useEffect(() => {
    if (typeof discussion_boards === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = discussion_boards[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [discussion_boards]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: discussion_boardsId, data }));
    await router.push('/discussion_boards/discussion_boards-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit discussion_boards')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit discussion_boards'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Course' labelFor='course'>
                <Field
                  name='course'
                  id='course'
                  component={SelectField}
                  options={initialValues.course}
                  itemRef={'courses'}
                  showField={'title'}
                ></Field>
              </FormField>

              <FormField label='Posts' labelFor='posts'>
                <Field
                  name='posts'
                  id='posts'
                  component={SelectFieldMany}
                  options={initialValues.posts}
                  itemRef={'posts'}
                  showField={'content'}
                ></Field>
              </FormField>

              {hasPermission(currentUser, 'READ_ORGANIZATIONS') && (
                <FormField label='organization' labelFor='organization'>
                  <Field
                    name='organization'
                    id='organization'
                    component={SelectField}
                    options={initialValues.organization}
                    itemRef={'organizations'}
                    showField={'name'}
                  ></Field>
                </FormField>
              )}

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() =>
                    router.push('/discussion_boards/discussion_boards-list')
                  }
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditDiscussion_boards.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_DISCUSSION_BOARDS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditDiscussion_boards;
