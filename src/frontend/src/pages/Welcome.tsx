import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

import { getApi, getStaticContent } from '../utils/request';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  // const intl = useIntl();
  let [title, setTitle] = useState('');

  const [markdown, setMarkdown] = useState('markdown desc');
  useEffect(() => {
    (async function initFunction() {
      let _markdownContent = ''
      try {
        const result = await getApi('/');
        const result2 = await getStaticContent('/intro.md');
        title = result.data.title;
        _markdownContent = result2.data;
      } catch (e) {
      }
      setMarkdown(_markdownContent);
      setTitle(title);

    })();
  }, [title]);
  return (
    <PageContainer>
      <Card>
        <div>{title}</div>
        <ReactMarkdown children={markdown} />

        {/* <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: title,
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        /> */}
        {/* <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="高级布局" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview> */}
      </Card>
    </PageContainer>
  );
};
