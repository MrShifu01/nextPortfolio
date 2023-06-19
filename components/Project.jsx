import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project(props) {
  // Destructure the props object to extract the required values
  const { title, image, description, github, live } = props;

  return (
    <Card style={{ width: '18rem' }}>
      {/* Display the project image */}
      <Card.Img variant="top" src={image} />

      <Card.Body>
        {/* Display the project title */}
        <Card.Title>{title}</Card.Title>

        {/* Display the project description */}
        <Card.Text>{description}</Card.Text>

        <div className='buttons'>
          {/* Display a link to the GitHub repository */}
          <a href={github} target="_blank">
            <Button variant="primary">Github</Button>
          </a>

          {/* Display a link to the live site (if available) */}
          {live && (
            <a href={live} target="_blank">
              <Button>View Live Site</Button>
            </a>
          )}
        </div>
      </Card.Body>

      {/* Add custom styling for the buttons */}
      <style jsx>{`
        .buttons {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </Card>
  );
}

export default Project;
