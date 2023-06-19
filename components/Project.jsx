import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project(props) {
  const { title, image, description, github, live } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className='buttons'>
            <a href={github} target="_blank">
              <Button variant="primary">Github</Button>
            </a>
            {live && <a href={live} target="_blank">
              <Button>View Live Site</Button>
            </a>}
        </div>
      </Card.Body>

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
