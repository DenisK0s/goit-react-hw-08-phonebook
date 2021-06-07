//компоненты
import Container from '../components/CommonComponents/Container';
import PageTitle from '../components/CommonComponents/PageTitle';

const ErrorPage = () => {
  return (
    <Container>
      <PageTitle classType="error">Something went wrong!!!</PageTitle>
    </Container>
  );
};

export default ErrorPage;
