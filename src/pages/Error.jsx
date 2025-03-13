import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>It's not working!</h1>
      <p>Technological difficulties should be expected. 
        Zombies are not known for their technical prowess.
        If this reoccurs, please reach out via Github: Zomblic.
        ... or just try again later.
        ...
        ...
        ...
        is it working now?
        damn.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
