import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>It's not working!</h1>
      <p>Technological difficulties should be expected. </p>
      <p>
        Zombies are not known for their technical prowess.
        <br />
        If this reoccurs, please reach out via Github: Zomblic.
        <br />
        ... or just try again later.
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        is it working now?
        <br />
        damn.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
