import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "50px 300px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "normal",
  fontSize: 16,
  verticalAlign: "5%",
  marginRight: "10px",
};

const linkActiveStyle = {
  fontWeight: "bold",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>PRTime</h1>

      <div>
        <Link style={linkStyle} activeStyle={linkActiveStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} activeStyle={linkActiveStyle} to="/prtime">
          PRTime
        </Link>
        <Link style={linkStyle} activeStyle={linkActiveStyle} to="/project2">
          Project 2
        </Link>
        <Link style={linkStyle} activeStyle={linkActiveStyle} to="/project3">
          Project 3
        </Link>
      </div>

      <p style={paragraphStyles}>
        Temporibus quia consequuntur distinctio itaque voluptates numquam beatae
        asperiores ut, maxime, repellat ratione. Architecto minus, voluptatum
        quas error amet aspernatur, odio excepturi nobis porro sit fugit! Maxime
        voluptate consequuntur praesentium!
      </p>
      <p style={paragraphStyles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde
        asperiores, temporibus ratione reprehenderit laudantium officia dolorum
        amet quam consequatur minima corporis quis? Dignissimos, nihil nemo
        dicta delectus temporibus eaque?
      </p>
      <p style={paragraphStyles}>
        Ipsum voluptates ipsa similique deleniti! Aspernatur exercitationem
        quaerat, facere atque ad nulla laboriosam voluptates doloribus facilis,
        voluptatem deleniti similique? Dicta consectetur sint temporibus ipsum
        omnis facere nisi corrupti porro sapiente.
      </p>
      <p style={paragraphStyles}>
        Voluptatem temporibus officiis illo explicabo distinctio asperiores,
        eius maiores non doloremque provident quo soluta, iure repellat fuga
        ullam aspernatur repellendus, cumque consequatur unde tenetur sequi
        porro neque! Eum, veniam reiciendis.
      </p>
      <p style={paragraphStyles}>
        Tempora doloribus ipsam, delectus, architecto quisquam fugiat
        voluptatibus fugit ullam molestias vel esse nostrum impedit consectetur
        deserunt maxime tenetur autem debitis porro. Saepe repellat dolorum eius
        quibusdam doloribus iste cum!
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PRTime</title>;
